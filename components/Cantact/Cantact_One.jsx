import Image from 'next/image';

export default function Cantact_One() {
  return (
    <div className="w-full lg:w-1/2 mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/images45.jpg" 
              alt="Aide d'entreprise" 
              title="Aide d'entreprise" 
              draggable="false" 
              loading="lazy" 
              width={40} 
              height={40} 
              className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" 
              style={{ backgroundColor: 'rgb(171, 70, 210)' }} 
            />
            <div>
                <h5 className="mb-0 font-bold"></h5>
                <p className="text-gray-600 mb-0 text-sm flex gap-1">
                Tel : 0660 64 05 32
                </p>
                
                
            </div>
        </div>
        
        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/images98.jpg" 
              alt="Préoccupations RH" 
              title="Préoccupations RH" 
              draggable="false" 
              loading="lazy" 
              width={40} 
              height={40} 
              className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" 
              style={{ backgroundColor: 'rgb(171, 70, 210)' }} 
            />
            <div>
                
                <p className="text-gray-600 mb-0 text-sm flex gap-1">
                Email: commercial@ctime.dz
                </p>
               
            </div>
        </div>

        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/images23.png" 
              alt="Soutien technique" 
              title="Soutien technique" 
              draggable="false" 
              loading="lazy" 
              width={40} 
              height={40} 
              className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" 
              style={{ backgroundColor: 'rgb(171, 70, 210)' }} 
            />
            <div>
                
                <p className="text-gray-600 mb-0 text-sm flex gap-1">Adresse : Zone Industrielle ENMTP – Ain Smara
                </p>
                <p className="text-gray-600 mb-55 text-sm flex gap-55"> Constantine – Algérie</p>
                <div className="my-8" />
                <div style={{ width: '100%', height: '500px', position: 'relative' }}>
                 <iframe  className= "gap-20"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.887071427181!2d6.509229274926323!3d36.290789896250764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f17b410be45d25%3A0x13811453f5f719bf!2sCTIME!5e0!3m2!1sen!2sdz!4v1731311611023!5m2!1sen!2sdz"
                  width="164%" // S'adapte à la largeur du conteneur
                  height="100%" // S'adapte à la hauteur du conteneur
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  />
                </div>
               
            </div>
        </div>
    </div>
  );
}
