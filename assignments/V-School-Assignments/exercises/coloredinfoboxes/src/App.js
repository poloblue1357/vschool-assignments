import React from 'react';
import Color from './Color';

const App = () => {
    return (
        <div>
            <Color title="Blue Card" subtitle="this card is blue" information="this is the info for my card that is blue" backgroundColor="Blue"/>
            <Color title="Red Boat" subtitle="Big Red Boat!" information="My red boat is red." backgroundColor="Red"/>
            <Color title="This is Green Lantern's space!" subtitle="Green Lantern was a terrible movie." information="What makes the green grass grow?" backgroundColor="Green"/>
            <Color title="Purple Rain" subtitle="She's a superfreak!" information="I'm Rick James!" backgroundColor="Purple"/>
            <Color title="Tweety Bird" subtitle="yellow" information="this is yellow" backgroundColor="yellow"/>
            <Color title="black" subtitle="black" information="this is black" backgroundColor="black"/>
            <Color title="orange" subtitle="orange" information="this is orange" backgroundColor="orange"/>
            <Color title="pink" subtitle="pink" information="this is pink" backgroundColor="pink"/>
            <Color title="teal" subtitle="teal" information="this is teal" backgroundColor="teal"/>
            <Color title="gray" subtitle="gray" information="this is gray" backgroundColor="gray"/>
        </div>
    )
}
export default App