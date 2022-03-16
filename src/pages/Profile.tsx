import React from 'react';

interface ProfileProps {
    artist: SpotifyApi.SingleArtistResponse | undefined
}
export default function Profile({ artist }: ProfileProps) {

    const srcSetString = artist?.images.reduceRight((acc, curr) => {
        acc += `${curr.url} ${curr.width}w ,`;
        return acc;
    }, "");

    return (
        <div id="profile-section" className="">
            <fieldset className="border-2 dark:border-cream">
                <legend className="text-4xl uppercase px-16">{artist?.name}</legend>
                <figure className="p-10 flex space-x-10">
                    <figcaption className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam qui labore vero enim, pariatur quaerat. Quibusdam, nemo iste. Pariatur perferendis suscipit totam rerum neque quo nihil ut eius architecto?</figcaption>
                    <img className="aspect-square max-w-md 2xl:max-w-xl" src={artist?.images[2].url} srcSet={srcSetString} alt={artist?.name}/>
                </figure>
            </fieldset>
        </div>
    )
}
