'use client';

import { useState } from 'react';
import { FaCarAlt } from 'react-icons/fa';
import {
  FaCalendarDays,
  FaLocationArrow,
  FaLocationDot,
  FaUserGroup,
} from 'react-icons/fa6';
import emailjs from 'emailjs-com';

export default function BookYourRide() {
  const [dateAndTime, setDateAndTime] = useState('');
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

  const formatDateTime = (input: string) => {
    const numbersOnly = input.replace(/\D/g, '').slice(0, 12); // DDMMYYYYHHMM
    let formatted = '';

    if (numbersOnly.length <= 2) {
      formatted = numbersOnly;
    } else if (numbersOnly.length <= 4) {
      formatted = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2)}`;
    } else if (numbersOnly.length <= 8) {
      formatted = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(
        2,
        4
      )}/${numbersOnly.slice(4)}`;
    } else {
      formatted = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(
        2,
        4
      )}/${numbersOnly.slice(4, 8)} ${numbersOnly.slice(8, 10)}${
        numbersOnly.length > 10 ? ':' + numbersOnly.slice(10, 12) : ''
      }`;
    }

    return formatted;
  };

  const checkDateAndTime = (str: string): boolean => {
    console.log('Date and time', str);
    const match = str.match(/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/);
    if (!match) {
      console.log('Date time didnnt match');
      setDateAndTimeError('Please Insert Date and Time.');
      return false;
    } // prevent error while typing

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, dd, mm, yyyy, hh, min] = match;
    const inputDate = new Date(`${yyyy}-${mm}-${dd}T${hh}:${min}`);
    console.log('Input date being verified: ', inputDate);
    if (isNaN(inputDate.getTime())) {
      console.log('Invalid date object');
      setDateAndTimeError('Please Insert Date And Time');
      return false;
    }

    if (inputDate < new Date()) {
      console.log('Date is in the past');
      setDateAndTimeError('Please enter a date and time in the future.');
      return false;
    }
    return inputDate >= new Date();
  };

  const handleDateAndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    console.log('Changing date and time:', raw);

    const formatted = formatDateTime(raw);
    setDateAndTime(formatted);
    setDateAndTimeError(''); // clear error while typing
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
    if (!name || !email || !phone) {
      setSubmitFormError('Please fill in all fields.');
      return;
    }
    setSubmitFormError('');
    const messageToBeSent = `One of our clients has requested a transfer with the following details:\n\n
    From: ${from}\n 
    To: ${to}\n
    Date and Time: ${dateAndTime}\n
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
      date_and_time: dateAndTime,
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
          alert('Email sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          setSubmitFormError('There was an error sending the email.');
        }
      );
  };

  return (
    <div className='w-full flex flex-col bg-white rounded-2xl md:p-10 p-6 gap-6 items-start shadow-xl'>
      <div className='font-bold md:text-[20px] text-base md:mx-0 mx-auto'>
        Book Your Transfer
      </div>

      {step === 'trip' ? (
        <>
          {/* FROM AND TO */}
          <div className='flex md:flex-row flex-col w-full items-center md:gap-12 gap-6'>
            {/* From Input */}
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>From:</label>
              <div className='relative w-full md:text-lg text-base'>
                <input
                  type='text'
                  placeholder='Armação de Pêra, Algarve'
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 md:pr-12 pr-9'
                />
                <FaLocationDot className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
              </div>
            </div>

            {/* To Input */}
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>To:</label>
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
            <div className='flex md:gap-10 gap-5 items-start w-full'>
              {/* Date & Time Input */}
              <div className='flex flex-col items-start gap-1 w-5/7'>
                <label className='font-light md:text-base text-sm'>
                  Date & Time:
                </label>
                <div className='flex flex-col'>
                  <div className='relative w-full md:text-lg text-base'>
                    <input
                      type='text'
                      value={dateAndTime}
                      onChange={handleDateAndTimeChange}
                      placeholder='24/07/2025 14:30'
                      maxLength={16}
                      className={`border ${
                        dateAndTimeError
                          ? 'border-red-500'
                          : 'border-customGray'
                      } rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3 md:pr-12 pr-9 appearance-none`}
                    />
                    <FaCalendarDays className='absolute md:right-4 right-3 top-1/2 transform -translate-y-1/2 text-customYellow pointer-events-none' />
                  </div>
                  {dateAndTimeError && (
                    <p className='text-red-500 text-[8px] mr-auto pl-1 mt-[2px] text-start'>
                      {dateAndTimeError}
                    </p>
                  )}
                </div>
              </div>

              {/* Passengers Input */}
              <div className='flex flex-col items-start gap-1 w-2/7'>
                <label className='font-light md:text-base text-sm'>
                  Passengers:
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
                className='cursor-pointer w-full md:py-5 py-3 bg-customYellow text-black font-bold rounded-2xl md:text-lg text-base flex items-center gap-2 justify-center'
              >
                {/* <FaCarAlt /> */}
                Continue
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
                Full Name:
              </label>
              <input
                type='text'
                placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3'
              />
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>Email:</label>
              <input
                type='email'
                placeholder='john@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3'
              />
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <label className='font-light md:text-base text-sm'>
                Phone Number:
              </label>
              <input
                type='tel'
                placeholder='+351 912 345 678'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='border border-customGray rounded-2xl w-full md:py-5 py-3 md:pl-4 pl-3'
              />
            </div>
            <div className='flex flex-col gap-[2px] w-full'>
              <button
                onClick={() => submitForm()}
                className='cursor-pointer w-full md:py-5 py-3 bg-customYellow text-black font-bold rounded-2xl md:text-lg text-base flex items-center gap-2 justify-center'
              >
                <FaCarAlt />
                Confirm Booking
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
