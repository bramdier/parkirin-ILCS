import emailjs from 'emailjs-com';

const sendEmail = (email, bookingCode, qrCodeUrl) => {
  emailjs.send(
    'service_qsxv1nm',
    'template_i33ea5h',
    {
      email,
      bookingCode,
      qrCodeUrl,
    },
    'Y9mnMqRNMrRacllcA'
  )
  .then((response) => {
    console.log('Email sent successfully:', response);
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
};

export default sendEmail;
