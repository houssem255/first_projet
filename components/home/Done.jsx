'use client';
'use client';
import Link from "next/link";

export default function Done() {
    return (
        <section className="mx-auto w-1/2 my-12">
            <div className="relative overflow-hidden rounded-xl shadow-xl" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                    src={`https://www.youtube.com/embed/0UrnvE-BnfM`} // Vidéo principale
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    title="YouTube video player"
                />
            </div>

            {/* Bouton "Voir plus" qui redirige vers une autre page */}
            <div className="mt-4 text-center">
                
      <button className="mt-2 px-4 py-1 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-500 transition duration-200 transform hover:scale-105">
        <Link href="/ctime">
          En savoir plus
        </Link>
        </button>
            </div>
        </section>
    );
}
