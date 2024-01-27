import Image from "next/image";
import anime from 'animejs';

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen items-center justify-center p-24 relative">
      <div className="relative w-120 h-120">
        <div className="absolute inset-1/4 flex items-center justify-center">
          <Image src="/planet.png" alt="Planet" width={300} height={300} />
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100100} />
        </div>
        <div className="absolute bottom-20 left-20 transform">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        <div className="absolute bottom-20 right-20 transform">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        <div className="absolute left-20 top-20 transform">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        <div className="absolute right-20 top-20 transform">
          <Image src="/small-planet.png" alt="Small Planet" width={100} height={100} />
        </div>
        
      </div>
    </main>
  );
}