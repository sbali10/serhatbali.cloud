import React from 'react';
import OpenUrlButton from './OpenUrlButton'; // adjust the path if your OpenUrlButton component is in a different location
import InfoBox from './InfoBox'; // adjust the path if your InfoBox component is in a different location
import logo from './news.jpeg'; // adjust the path if your image is in a different location
import readlogo from './read.jpeg'; // adjust the path if your image is in a different location
import blog from './blog.jpeg'; // adjust the path if your image is in a different location

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ 
          color: '#000000', 
          fontSize: '24px', 
          fontFamily: 'Arial, sans-serif',
          margin: '0' 
        }}>
          Newspaper
        </h1>
        <img src={logo} alt="Newspaper Logo" style={{ marginLeft: '10px', width: '50px', height: '50px' }} />
      </div>

      <div style={{ border: '1px solid black', width: '80%', margin: '0 auto 20px auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <OpenUrlButton url="https://www.milliyet.com.tr" name="Milliyet" />
        <OpenUrlButton url="https://gazeteoksijen.com/" name="Oksijen" />
        <OpenUrlButton url="https://www.gazeteduvar.com.tr/" name="Duvar" />
        <div style={{ borderLeft: '2px solid black', height: '30px', margin: '0 10px' }} />
        <OpenUrlButton url="https://www.srf.ch/" name="SRF" />
        <OpenUrlButton url="https://www.blick.ch/" name="Blick" />
        <OpenUrlButton url="https://zuerich24.ch/" name="Zürich24" />
      </div>



      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
        <h1 style={{ 
          color: '#000000', 
          fontSize: '24px', 
          fontFamily: 'Arial, sans-serif',
          margin: '0' 
        }}>
          Read
        </h1>
        <img src={readlogo} alt="Read Logo" style={{ marginLeft: '10px', width: '50px', height: '50px' }} />
        </div>

        <div style={{ border: '1px solid black', width: '80%', margin: '0 auto 20px auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <OpenUrlButton url="https://devblogs.microsoft.com" name="Microsoft" />
        <OpenUrlButton url="https://engineering.fb.com" name="Meta" />
        <OpenUrlButton url="https://aws.amazon.com/de/blogs/architecture" name="Aws" />
        <OpenUrlButton url="https://blog.research.google" name="Google" />
        <div style={{ borderLeft: '2px solid black', height: '30px', margin: '0 10px' }} />
        <OpenUrlButton url="https://netflixtechblog.com" name="Netflix" />
        <OpenUrlButton url="https://developers.redhat.com/" name="Redhat" />
        <OpenUrlButton url="https://engineering.atspotify.com" name="Spotify" />
        <OpenUrlButton url="https://engineering.linkedin.com" name="Linkedin" />
      </div>



      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
        <h1 style={{ 
          color: '#000000', 
          fontSize: '24px', 
          fontFamily: 'Arial, sans-serif',
          margin: '0' 
        }}>
          Blog
        </h1>
        <img src={blog} alt="Blog Logo" style={{ marginLeft: '10px', width: '50px', height: '50px' }} />
        </div>

        <div style={{ border: '1px solid black', width: '80%', margin: '0 auto 20px auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <OpenUrlButton url="https://news.ycombinator.com/" name="HackerNews" />
        <OpenUrlButton url="https://techcrunch.com/" name="TechCrunch" />
        <OpenUrlButton url="https://dev.to/" name="Dev" />
        <div style={{ borderLeft: '2px solid black', height: '30px', margin: '0 10px' }} />
        <OpenUrlButton url="https://linuxhint.com/" name="LinuxHint" />
        <OpenUrlButton url="https://quoraengineering.quora.com/" name="Quora" />
        <OpenUrlButton url="https://www.reddit.com/" name="Reddit" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '110px', marginTop: '100px' }}>
        <InfoBox />
      </div>


    </div>

  );
}

export default App;