'use client';
import SendEmail from "../../src/app/api/sendEmail";
import { useState } from "react";

export default function Cantact_Two() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    number: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [btnText, setBtnText] = useState('Envoyer');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnText('Sending...');

    if (!attachment) {
      setBtnText('Attachment missing');
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values, attachment }),
      });

      if (response.ok) {
        setAttachment(null);
        console.log('Email sent successfully');
        setBtnText('Submitted');
      } else {
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target.result.split(',')[1];
        setAttachment({
          name: file.name,
          type: file.type,
          data: fileData,
        });
      };
      reader.readAsDataURL(file);
    }
    setBtnText('Submit');
  };

  const handleValues = (e) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNumber = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setValues(prev => ({
        ...prev,
        number: e.target.value,
      }));
    }
  };

  return (
    <form className="flex flex-col mt-3 lg:pl-8" onSubmit={handleSubmit}>
      <div className="flex gap-2 w-full flex-col sm:flex-row">
        <div className="w-full">
          <label className="mb-1 text-xs font-medium" htmlFor="fn">Prénom :</label>
          <input 
            type="text" 
            id="fn" name="firstname" 
            className="rounded border-2 px-2 py-1 outline-none w-full" 
            placeholder="Entrez votre prénom"
            value={values.firstname}
            onChange={handleValues}
          />
        </div>
        <div className="w-full">
          <label className="mb-1 text-xs font-medium" htmlFor="ln">Nom :</label>
          <input 
            type="text" 
            id="ln" name="lastname" 
            className="rounded border-2 px-2 py-1 outline-none w-full" 
            placeholder="Entrez votre nom"
            value={values.lastname}
            onChange={handleValues} />
        </div>
      </div>
      <div className="flex gap-2 w-full flex-col sm:flex-row mt-2">
        <div className="w-full">
          <label className="mb-1 text-xs font-medium" htmlFor="email">Email :</label>
          <input 
            type="email" 
            id="email" name="email" 
            className="rounded border-2 px-2 py-1 outline-none w-full" 
            placeholder="Entrez votre email"
            value={values.email}
            onChange={handleValues}
          />
        </div>
        <div className="w-full">
          <label className="mb-1 text-xs font-medium" htmlFor="number">Numéro :</label>
          <input 
            type="text" 
            id="number" name="number" 
            className="rounded border-2 px-2 py-1 outline-none w-full" 
            placeholder="Entrez votre numéro"
            value={values.number}
            onChange={handleNumber} />
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <label className="mb-1 text-xs font-medium">Message :</label>
        <textarea 
          name="message" 
          className="border rounded-md h-[70px] px-2 py-1" 
          placeholder="Entrez votre message"
          value={values.message}
          onChange={handleValues} />
      </div>
      <div className="mt-2 flex flex-col">
        <label className="mb-1 text-xs font-medium" htmlFor="ff">Fichier :</label>
        <input type="file" id="ff" onChange={handleFileChange} />
      </div>
      
      <button type="submit" className="bg-gray-900 font-medium rounded w-full mt-4 text-white px-2 py-1">{btnText}</button>
    </form>
  );
}
