'use client';

import { useEffect, useRef, useState } from 'react';
import { FaCarAlt } from 'react-icons/fa';
import {
  FaCalendarDays,
  FaLocationArrow,
  FaLocationDot,
  FaUserGroup,
} from 'react-icons/fa6';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export default function BookYourRide() {
  const { t } = useTranslation();

  const [dateAndTime, setDateAndTime] = useState('');
  const [minDateTime, setMinDateTime] = useState('');
  const [dateAndTimeError, setDateAndTimeError] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [passengers, setPassengers] = useState('');
  const [step, setStep] = useState<'trip' | 'user'>('trip');
  const [firstStepError, setFirstStepError] = useState('');
  const [submitFormError, setSubmitFormError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const now = new Date();
    const formatted = now.toISOString().slice(0, 16); // 'YYYY-MM-DDTHH:MM'
    setMinDateTime(formatted);
  }, []);

  const checkDateAndTime = (str: string): boolean => {
    console.log('Date and time input:', str);

    if (!str) {
      setDateAndTimeError('Please insert date and time.');
      return false;
    }

    const inputDate = new Date(str); // expects ISO format: yyyy-MM-ddTHH:mm

    if (isNaN(inputDate.getTime())) {
      console.log('Invalid date object');
      setDateAndTimeError('Invalid date and time.');
      return false;
    }

    const now = new Date();

    if (inputDate < now) {
      console.log('Date is in the past');
      setDateAndTimeError('Please enter a date and time in the future.');
      return false;
    }

    // Clear any previous error
    setDateAndTimeError('');
    return true;
  };

  const handleDateAndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDateAndTime(raw);
  };

  const handleTripSubmit = () => {
    if (
      from &&
      to &&
      dateAndTime &&
      passengers &&
      checkDateAndTime(dateAndTime)
    ) {
      setFirstStepError('');

      setStep('user');
    } else {
      setFirstStepError('Please fill in all fields correctly.');
    }
  };

  const submitForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/; // Accepts international numbers with optional '+' and 9–15 digits

    if (!name || !email || !phone) {
      setSubmitFormError('Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      setSubmitFormError('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      setSubmitFormError('Please enter a valid phone number.');
      return;
    }

    setSubmitFormError('');
    const formattedDateTime = dateAndTime.replace('T', ' ');

    const messageToBeSent = `One of our clients has requested a transfer with the following details:\n\n
    From: ${from}\n 
    To: ${to}\n
    Date and Time: ${formattedDateTime}\n
    Passengers: ${passengers}\n
    Name: ${name}\n
    Email: ${email}\n
    Phone: ${phone}\n
  `;

    console.log('Message to be sent:', messageToBeSent);

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      from,
      to,
      date_and_time: formattedDateTime,
      passengers,
    };

    emailjs
      .send(
        'service_5jlzq8n',
        'template_kh9cmig',
        templateParams,
        'iJJ0T9UWvXuBoIifm'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setShowSuccessAlert(true);
          clearFormInputs();

          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 3000);
        },
        (err) => {
          console.error('FAILED...', err);
          setSubmitFormError('There was an error sending the email.');
        }
      );
  };

  const clearFormInputs = () => {
    setDateAndTime('');
    setDateAndTimeError('');
    setFrom('');
    setTo('');
    setPassengers('');
    setStep('trip');
    setFirstStepError('');
    setSubmitFormError('');
    setName('');
    setEmail('');
    setPhone('');
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    // Only works in modern browsers
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker();
    } else {
      inputRef.current?.focus(); // Fallback
    }
  };

  return (
    <div className='w-full flex flex-col bg-white rounded-2xl md:p-10 p-6 gap-6 items-start shadow-xl'>
      <AnimatePresence>
        {showSuccessAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className='fixed bottom-4 right-4 bg-customYellow text-black px-6 py-3 rounded-lg shadow-lg z-50'
          >
            {t('bookYourRide.successMessage')}
          </motion.div>
        )}
      </AnimatePresence>
      <div className='font-bold md:text-[20px] text-base md:mx-0 mx-auto'>
        {t('bookYourRide.bookTransfer')}
      </div>

      {step === 'trip' ? (
        <>
          {/* FROM AND TO */}
          <div className='flex md:flex-row flex-col w-full items-center md:gap-12 gap-6'>
            {/* From Input */}
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>
                {t('bookYourRide.from')}
              </label>
              <div className='relative w-full md:text-lg text-base'>
                <input
                  type='text'
                  placeholder={'Armação de Pêra, Algarve'}
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 md:pr-12 pr-9'
                />
                <FaLocationDot className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
              </div>
            </div>

            {/* To Input */}
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>
                {t('bookYourRide.to')}
              </label>
              <div className='relative w-full md:text-lg text-base '>
                <input
                  type='text'
                  placeholder='Tavira, Algarve'
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 md:md:pr-12 pr-9 '
                />
                <FaLocationArrow className='absolute md:md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
              </div>
            </div>
          </div>

          {/* DATE, PASSENGERS & BUTTON */}
          <div className='flex md:flex-row flex-col w-full items-end md:gap-12 gap-6'>
            <div className='flex md:flex-row flex-col md:gap-10 gap-6 items-start w-full'>
              {/* Date & Time Input */}
              <div className='flex flex-col items-start gap-1 w-full'>
                <label className='font-light md:text-base text-sm'>
                  {t('bookYourRide.dateTime')}
                </label>
                <div className='flex flex-col w-full'>
                  <div className='relative w-full md:text-lg text-base'>
                    <input
                      ref={inputRef}
                      type='datetime-local'
                      id='custom-date-time'
                      value={dateAndTime}
                      onChange={handleDateAndTimeChange}
                      placeholder='24/07/2025 14:30'
                      min={minDateTime}
                      className={`border ${
                        dateAndTimeError
                          ? 'border-red-500'
                          : 'border-customGray'
                      } rounded-2xl w-full md:py-5 py-3 md:px-4 px-3  appearance-none`}
                    />
                    <div
                      onClick={handleIconClick}
                      className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow bg-white px-1 py-1'
                    >
                      <FaCalendarDays className='pointer-events-none' />
                    </div>
                  </div>
                  {dateAndTimeError && (
                    <p className='text-red-500 text-[8px] mr-auto pl-1 mt-[2px] text-start'>
                      {dateAndTimeError}
                    </p>
                  )}
                </div>
              </div>

              {/* Passengers Input */}
              <div className='flex flex-col items-start gap-1 w-full'>
                <label className='font-light md:text-base text-sm'>
                  {t('bookYourRide.passengers')}
                </label>
                <div className='relative w-full md:text-lg text-base'>
                  <input
                    type='number'
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    placeholder='4'
                    min={1}
                    className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 md:pr-12 pr-9 appearance-none'
                  />
                  <FaUserGroup className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className='flex flex-col gap-[2px] w-full'>
              <button
                onClick={() => handleTripSubmit()}
                className='cursor-pointer w-full md:py-5 py-3 bg-customYellow text-black font-semibold rounded-2xl md:text-lg text-base flex items-center gap-2 justify-center'
              >
                {/* <FaCarAlt /> */}
                {t('bookYourRide.continue')}
              </button>
              {firstStepError && (
                <p className='text-red-500 text-[10px] mx-auto pl-1 mt-[2px] text-start'>
                  {firstStepError}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* show name, email, phone fields */}
          <div className='flex flex-col w-full gap-6'>
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>
                {t('bookYourRide.fullName')}
              </label>
              <input
                type='text'
                placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 appearance-none'
              />
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>Email:</label>
              <input
                type='email'
                placeholder='john@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 appearance-none'
              />
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>
                {t('bookYourRide.phoneNumber')}
              </label>
              <input
                type='tel'
                placeholder='+351 912 345 678'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 appearance-none'
              />
            </div>
            <div className='flex flex-col gap-[2px] w-full'>
              <button
                onClick={() => submitForm()}
                className='cursor-pointer w-full md:py-5 py-3 bg-customYellow text-black font-bold rounded-2xl md:text-lg text-base flex items-center gap-2 justify-center'
              >
                <FaCarAlt />
                {t('bookYourRide.confirmBooking')}
              </button>
              <p className='text-red-500 text-[10px] mx-auto pl-1 mt-[2px] text-start'>
                {submitFormError}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
