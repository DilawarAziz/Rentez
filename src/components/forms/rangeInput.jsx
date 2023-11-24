'use client'
const InputSlider = ({ value, setValue }) => {

    return (
        <div className="w-full">
            {/* <label htmlFor="price" className="font-bold text-gray-700">
                Price ${value}
            </label> */}
            <input
                type="range"
                min="2000"
                name="price"
                max="20000"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-orange rounded-full appearance-none"
            />
        </div>
    );
};

export default InputSlider;
