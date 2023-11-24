import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
function ImageInput({ selectedImage, handleImageClick, fileInputRef, handleFileChange, className }) {
    return (
        <div className={`mt-4  bg-white  h-[150px] lg:h-[130px] xl:h-[200px] sm:h-[200px]  flex flex-col items-center justify-center rounded-xl gap-2 ${className}`}>
            {selectedImage ? (
                <Image
                    src={selectedImage}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='cursor-pointer  w-[fit-content]'
                    alt="Selected Image"
                    onClick={handleImageClick}
                />
            ) : (
                <>
                    <div className='cursor-pointer rounded-full w-full flex items-center flex-col justify-center'>
                        <Image
                            src={'/backendimages/Img_box.svg'}
                            width={100}
                            height={100}
                            sizes='100vw'
                            className=''
                            alt="Placeholder"
                            onClick={handleImageClick}
                        />
                    </div>
                </>
            )}
            <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    )
}

export default ImageInput