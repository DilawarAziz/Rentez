import React from 'react';

const Checkbox = ({ title }) => {
    return (
        <div className="flex items-center mb-4">
            <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-orange bg-orange border-gray-300 rounded "
            />
            <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
            >
                {title}
            </label>
        </div>
    );
};

export default Checkbox;
