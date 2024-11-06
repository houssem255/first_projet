import Image from 'next/image';

export default function Cantact_One() {
  return (
    <div className="w-full lg:w-1/2 mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/images45.jfif" 
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
                Tel : 0660 64 05 34
                </p>
                
                
            </div>
        </div>
        
        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/images98.jfif" 
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
            
               
            </div>
        </div>
    </div>
  );
}
