import { useUser } from '@clerk/nextjs';
import {StreamVideoClient, StreamVideo} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
 

  
   const StreamVideoProvider = ({children}: {children: ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient >();

     const {user, isLoaded} = useUser();
    useEffect(() => {
       if(!user || !isLoaded) return;
       if(!apiKey) throw new Error('Stream API key is missing');

       const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider
         });

    },[user, isLoaded])


    return (
      <StreamVideo client={videoClient}>
           
      </StreamVideo>
    );
  };

  export default StreamVideoProvider;