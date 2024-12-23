'use client'


import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <footer className="bg-black text-white py-0 ">
        <div className="container mx-auto px-4 md:pt-20 pt-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            
            <div>
              <h3 className="text-lg font-bold mb-4">Adresse</h3>
              <p className="text-gray-300">Zone Industrielle ENMTP – Ain Smara

                       Constantine</p>
              <p className="text-gray-300">Code Postal</p>
              <p className="text-gray-300">Algérie</p>
              
            </div>
  
            
            <div className="md:text-center">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300"><a href="mailto:contact@example.com"> contact@ctime.dz</a></p>
              <p>0660 64 05 32</p>
            </div>
  
            
            <div className="md:text-center">
              <h3 className="text-lg font-bold mb-4">Réseaux</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="https://www.facebook.com/CtimeAlgerie/"  >FACEBOOK</Link></li>
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="https://www.youtube.com/@ctimealgerie5011"  >YOUTUBE</Link></li>
                
              </ul>
            </div>
  
            
            <div className="md:text-center">
              <h3 className="text-lg font-bold mb-4">lien utile</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200">
                   <Link href="https://www.industrie.gov.dz/fr/">
                     Ministère de l&apos;Industrie et de la Production Pharmaceutique
                  </Link> </li>
               


              </ul>
            </div>
          </div>
  
          
          <hr className="my-8 border-gray-600" />

          <div className="flex items-center ml-50">
            <Image 
                src="/ctime.png"  
                alt="Logo"
                width={80}       
                height={80}      
                className="object-contain h-8 mr-4"
              />
            <p className="text-center text-gray-200  ">&copy; {new Date().getFullYear()} Ctime. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
}