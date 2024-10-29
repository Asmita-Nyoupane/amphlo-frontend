
import React from 'react'

const MapSection = () => {
    return (

        <>
            <h2 className="text-4xl font-bold text-mainColor text-center">
                Our   Location
            </h2>
            <div className="aspect-video  flex items-center justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6635269358503!2d83.46291407546593!3d27.665880076206292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996850023dc034f%3A0xde2f6844941a9b38!2sLopho%20Abroad%20Consultancy%20(Head%20Office)!5e0!3m2!1sen!2snp!4v1730111145285!5m2!1sen!2snp"
                    width="1000"
                    height="600"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    )
}

export default MapSection