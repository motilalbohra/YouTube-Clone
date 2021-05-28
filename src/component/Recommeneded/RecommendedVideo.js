import React from 'react';
import './RecommendedVideo.css';
import Video from './Video/VideoCard';


/**
* @author
* @function RecommendedVideos
**/

const RecommendedVideos = (props) => {
  return(
    <div className="recommendedVideo">
       <h2>Recommended</h2>
       <div className="recommendedVideo__videos">
          <Video 
          title="NBA “That’s Game”"
          views="48,766 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjV72MIMAOH7wAYGQHoQ2WxDszD-YIF6dt60jUm3A=s88-c-k-c0x00ffffff-no-rj"
          channel="NBA"
          image="https://i.ytimg.com/vi/It4nw4v95Yk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1vQ2bXE851gxz0CFRKebt73rww"
          />
          <Video 
          title="Bandeya Video | Sardar Ka Grandson | Arjun K, Rakul P, John A, Aditi R | Divya K| Tanishk B, Manoj M"
          views="255,386 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s176-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/vi/in6mJsTHLI0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjQHVmzhr0u9xXNrw3nLH_qCKoAQ"
          />
         <Video 
          title="Relationship Q&A with yours truly!"
          views="42,054 views"
          timestamp="15 Feb 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniQbBlbuqcEYXVAfYCPDu5ZEdexHmc3W5plWpgfvg=s88-c-k-c0x00ffffff-no-rj"
          channel="Parth Vijayvergiya"
          image="https://i.ytimg.com/vi/vQXmo30yeAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMUO3Ot9n1d8nxueb7FhJLr0NatA"
          />
         <Video 
          title="We Brought Golden Retriever Puppy Home First Time - His First Day! 8 WEEKS OLD"
          views="314,149 views"
          timestamp="12 Jul 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipPaKzgPl2jgfD66KbZbZCkLFw3tD2chWRU8K9=s88-c-k-c0x00ffffff-no-rj"
          channel="Yudi J"
          image="https://i.ytimg.com/vi/YiQjPgaC0Xo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC624wgB0j7ZpGnFHMOUZme3M56xg"
          />
         <Video 
          title="Stripe with React and node crash course"
          views="41,614 views"
          timestamp="23 Feb 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnihtV8Mb0JZFkkAEf9KKN4m4WNNeHkxUb6Wuvc_5w=s88-c-k-c0x00ffffff-no-rj"
          channel="Hitesh Choudhary"
          image="https://i.ytimg.com/vi/lbEFSP1WAv0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCVMnj9FZTNUDPcF3bWS7xisroow"
          />
         <Video 
          title="Unboxing my YouTube silver play button! #shorts | Ankur Warikoo"
          views="41,614 views"
          timestamp="10 Apr 2021"
          channelImage="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
          channel="warikoo"
          image="https://i.ytimg.com/vi/c7b_y9aY4d0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiMDAAKQjsXACGOWaFUOK1EziKqQ"
          />
           <Video 
          title="NBA “That’s Game”"
          views="48,766 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjV72MIMAOH7wAYGQHoQ2WxDszD-YIF6dt60jUm3A=s88-c-k-c0x00ffffff-no-rj"
          channel="NBA"
          image="https://i.ytimg.com/vi/It4nw4v95Yk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1vQ2bXE851gxz0CFRKebt73rww"
          />
          <Video 
          title="Bandeya Video | Sardar Ka Grandson | Arjun K, Rakul P, John A, Aditi R | Divya K| Tanishk B, Manoj M"
          views="255,386 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s176-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/vi/in6mJsTHLI0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjQHVmzhr0u9xXNrw3nLH_qCKoAQ"
          />
         <Video 
          title="Relationship Q&A with yours truly!"
          views="42,054 views"
          timestamp="15 Feb 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniQbBlbuqcEYXVAfYCPDu5ZEdexHmc3W5plWpgfvg=s88-c-k-c0x00ffffff-no-rj"
          channel="Parth Vijayvergiya"
          image="https://i.ytimg.com/vi/vQXmo30yeAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMUO3Ot9n1d8nxueb7FhJLr0NatA"
          />
         <Video 
          title="We Brought Golden Retriever Puppy Home First Time - His First Day! 8 WEEKS OLD"
          views="314,149 views"
          timestamp="12 Jul 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipPaKzgPl2jgfD66KbZbZCkLFw3tD2chWRU8K9=s88-c-k-c0x00ffffff-no-rj"
          channel="Yudi J"
          image="https://i.ytimg.com/vi/YiQjPgaC0Xo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC624wgB0j7ZpGnFHMOUZme3M56xg"
          />
         <Video 
          title="Stripe with React and node crash course"
          views="41,614 views"
          timestamp="23 Feb 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnihtV8Mb0JZFkkAEf9KKN4m4WNNeHkxUb6Wuvc_5w=s88-c-k-c0x00ffffff-no-rj"
          channel="Hitesh Choudhary"
          image="https://i.ytimg.com/vi/lbEFSP1WAv0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCVMnj9FZTNUDPcF3bWS7xisroow"
          />
         <Video 
          title="Unboxing my YouTube silver play button! #shorts | Ankur Warikoo"
          views="41,614 views"
          timestamp="10 Apr 2021"
          channelImage="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
          channel="warikoo"
          image="https://i.ytimg.com/vi/c7b_y9aY4d0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiMDAAKQjsXACGOWaFUOK1EziKqQ"
          />
           <Video 
          title="NBA “That’s Game”"
          views="48,766 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjV72MIMAOH7wAYGQHoQ2WxDszD-YIF6dt60jUm3A=s88-c-k-c0x00ffffff-no-rj"
          channel="NBA"
          image="https://i.ytimg.com/vi/It4nw4v95Yk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1vQ2bXE851gxz0CFRKebt73rww"
          />
          <Video 
          title="Bandeya Video | Sardar Ka Grandson | Arjun K, Rakul P, John A, Aditi R | Divya K| Tanishk B, Manoj M"
          views="255,386 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s176-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/vi/in6mJsTHLI0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjQHVmzhr0u9xXNrw3nLH_qCKoAQ"
          />
         <Video 
          title="Relationship Q&A with yours truly!"
          views="42,054 views"
          timestamp="15 Feb 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniQbBlbuqcEYXVAfYCPDu5ZEdexHmc3W5plWpgfvg=s88-c-k-c0x00ffffff-no-rj"
          channel="Parth Vijayvergiya"
          image="https://i.ytimg.com/vi/vQXmo30yeAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMUO3Ot9n1d8nxueb7FhJLr0NatA"
          />
         <Video 
          title="We Brought Golden Retriever Puppy Home First Time - His First Day! 8 WEEKS OLD"
          views="314,149 views"
          timestamp="12 Jul 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipPaKzgPl2jgfD66KbZbZCkLFw3tD2chWRU8K9=s88-c-k-c0x00ffffff-no-rj"
          channel="Yudi J"
          image="https://i.ytimg.com/vi/YiQjPgaC0Xo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC624wgB0j7ZpGnFHMOUZme3M56xg"
          />
         <Video 
          title="Stripe with React and node crash course"
          views="41,614 views"
          timestamp="23 Feb 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnihtV8Mb0JZFkkAEf9KKN4m4WNNeHkxUb6Wuvc_5w=s88-c-k-c0x00ffffff-no-rj"
          channel="Hitesh Choudhary"
          image="https://i.ytimg.com/vi/lbEFSP1WAv0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCVMnj9FZTNUDPcF3bWS7xisroow"
          />
         <Video 
          title="Unboxing my YouTube silver play button! #shorts | Ankur Warikoo"
          views="41,614 views"
          timestamp="10 Apr 2021"
          channelImage="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
          channel="warikoo"
          image="https://i.ytimg.com/vi/c7b_y9aY4d0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiMDAAKQjsXACGOWaFUOK1EziKqQ"
          />
           <Video 
          title="NBA “That’s Game”"
          views="48,766 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjV72MIMAOH7wAYGQHoQ2WxDszD-YIF6dt60jUm3A=s88-c-k-c0x00ffffff-no-rj"
          channel="NBA"
          image="https://i.ytimg.com/vi/It4nw4v95Yk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1vQ2bXE851gxz0CFRKebt73rww"
          />
          <Video 
          title="Bandeya Video | Sardar Ka Grandson | Arjun K, Rakul P, John A, Aditi R | Divya K| Tanishk B, Manoj M"
          views="255,386 views"
          timestamp="21 May 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s176-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/vi/in6mJsTHLI0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjQHVmzhr0u9xXNrw3nLH_qCKoAQ"
          />
         <Video 
          title="Relationship Q&A with yours truly!"
          views="42,054 views"
          timestamp="15 Feb 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniQbBlbuqcEYXVAfYCPDu5ZEdexHmc3W5plWpgfvg=s88-c-k-c0x00ffffff-no-rj"
          channel="Parth Vijayvergiya"
          image="https://i.ytimg.com/vi/vQXmo30yeAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMUO3Ot9n1d8nxueb7FhJLr0NatA"
          />
         <Video 
          title="We Brought Golden Retriever Puppy Home First Time - His First Day! 8 WEEKS OLD"
          views="314,149 views"
          timestamp="12 Jul 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipPaKzgPl2jgfD66KbZbZCkLFw3tD2chWRU8K9=s88-c-k-c0x00ffffff-no-rj"
          channel="Yudi J"
          image="https://i.ytimg.com/vi/YiQjPgaC0Xo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC624wgB0j7ZpGnFHMOUZme3M56xg"
          />
         <Video 
          title="Stripe with React and node crash course"
          views="41,614 views"
          timestamp="23 Feb 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnihtV8Mb0JZFkkAEf9KKN4m4WNNeHkxUb6Wuvc_5w=s88-c-k-c0x00ffffff-no-rj"
          channel="Hitesh Choudhary"
          image="https://i.ytimg.com/vi/lbEFSP1WAv0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCVMnj9FZTNUDPcF3bWS7xisroow"
          />
         <Video 
          title="Unboxing my YouTube silver play button! #shorts | Ankur Warikoo"
          views="41,614 views"
          timestamp="10 Apr 2021"
          channelImage="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
          channel="warikoo"
          image="https://i.ytimg.com/vi/c7b_y9aY4d0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiMDAAKQjsXACGOWaFUOK1EziKqQ"
          />

          
       </div> 
    </div>
   )

 }

export default RecommendedVideos