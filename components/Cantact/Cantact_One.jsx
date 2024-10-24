import Image from 'next/image';

export default function Cantact_One() {
  return (
    <div className="w-full lg:w-1/2 mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/avatar-12.webp" 
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
                <h5 className="mb-0 font-bold">Aide d&apos;entreprise</h5>
                <p className="text-gray-600 mb-0 text-sm flex gap-1">
                    <span className="font-medium">+213</span>
                    553714518
                </p>
                <p className="mb-0 text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus, repudiandae, facere eius et dolore dolores tempore commodi velit harum consequatur? Aliquam amet possimus ut architecto accusantium temporibus magnam molestias.</p>
            </div>
        </div>
        
        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/avatar-11.webp" 
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
                <h5 className="mb-0 font-bold">Préoccupations RH</h5>
                <p className="text-gray-600 mb-0 text-sm flex gap-1">
                    <span className="font-medium">+213</span>
                    666410964
                </p>
                <p className="mb-0 text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus, repudiandae, facere eius et dolore dolores tempore commodi velit harum consequatur? Aliquam amet possimus ut architecto accusantium temporibus magnam molestias.</p>
            </div>
        </div>

        <div className="flex items-center gap-2.5 border rounded-md px-4 py-2">
            <Image 
              src="/avatar-15.webp" 
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
                <h5 className="mb-0 font-bold">Soutien technique</h5>
                <p className="text-gray-600 mb-0 text-sm flex gap-1">
                    <span className="font-medium">+213</span>
                    770896245
                </p>
                <p className="mb-0 text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus, repudiandae, facere eius et dolore dolores tempore commodi velit harum consequatur? Aliquam amet possimus ut architecto accusantium temporibus magnam molestias.</p>
            </div>
        </div>
    </div>
  );
}
