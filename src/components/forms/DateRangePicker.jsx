import React from 'react';
import Calendar from '../calendar/calendar';
import Iconinput from './iconinput';

const DateRangePicker = ({ from, to, className }) => {
    return (
        <div className={`flex  items-center gap-2 ${className}`}>
            {/* Date Start */}
            <div>

                <label className='text-gray-600 font-semibold'> {from}</label>
                <div className="relative">
                    <Iconinput placeholder={'02/07/2023'} type={'text'} />
                </div>
                <Calendar className={'!mt-2'} />
            </div>

            {/* Separator */}

            {/* Date End */}
            <div>

                <label className='text-gray-600 font-semibold'> {to}</label>
                <div className="relative">
                    <Iconinput placeholder={'06/07/2023'} type={'text'} />
                </div>
                <Calendar className={'!mt-2 !w-full'} />
            </div>
        </div>
    );
};

export default DateRangePicker;
