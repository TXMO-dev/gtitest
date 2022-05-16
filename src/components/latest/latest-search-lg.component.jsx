const LatestSearchLgComponent = () => {
    return (
        <>
            <div className="hidden md:flex mb-[80px] w-full h-[100px] rounded-full bg-[#FFFFFF] pt-[27.92px] pb-[20.22px]drop-shadow-shadowdrop pl-[20px] pr-[20px]">
               <span className="w-full mr-[17.29px] relative ">
               <input type="text" className="flex items-center border-[2px] placeholder:text-[#575960] 
                                                placeholder:font-[275] placeholder:text-[16px] placeholder:leading-[41.49px]
                                                border-[#0062E1] rounded-full w-full outline-none pl-[35px] pr-[22.86px] pt-[16.58px] pb-[15.28px]" placeholder="Lorem Ipsum" />
                    <span className="absolute bg-[#FFFFFF] text-[#0062E1] -top-6 left-[30px] font-[600] text-[13.83px] leading-[41.49px]" >
                        Looking For
                    </span>
               </span>
                
                    
               <span className="relative w-full mr-[17.29px]">
               <span className="absolute bg-[#FFFFFF] text-[#0062E1] -top-6 left-[30px] font-[600] text-[13.83px] leading-[41.49px]">
                    in
                </span>
               <select className="flex border-[2px] outline-none border-[#0062E1] rounded-full w-full pl-[35px] pr-[22.86px] pt-[15.68px] pb-[13.5px]">
                    <option className="text-[#575960] font-[275] text-[16px] leading-[41.49px] flex items-center">
                        <span className="flex items-center">
                            <span>
                                <svg className='rounded-full mr-[5.57px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 -2H24.3332V24H-10.3335V-2Z" fill="#F7FCFF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 13.8889V16.0556H24.3332V13.8889H-10.3335Z" fill="#E31D1C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 17.8611V20.0278H24.3332V17.8611H-10.3335Z" fill="#E31D1C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 5.94446V8.11112H24.3332V5.94446H-10.3335Z" fill="#E31D1C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 9.91663V12.0833H24.3332V9.91663H-10.3335Z" fill="#E31D1C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 -2V0.166667H24.3332V-2H-10.3335Z" fill="#E31D1C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-10.3335 1.97217V4.13883H24.3332V1.97217H-10.3335Z" fill="#E31D1C"/>
                                    <rect x="-10.3335" y="-2" width="21.6667" height="14.0833" fill="#2E42A5"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-8.46817 1.18359L-9.25454 1.73486L-8.98906 0.753845L-9.6875 0.13208H-8.77524L-8.46927 -0.668579L-8.1105 0.13208H-7.33283L-7.94387 0.753845L-7.70731 1.73486L-8.46817 1.18359ZM-4.1348 1.18359L-4.92117 1.73486L-4.65568 0.753845L-5.35413 0.13208H-4.44186L-4.1359 -0.668579L-3.77713 0.13208H-2.99945L-3.61049 0.753845L-3.37393 1.73486L-4.1348 1.18359ZM-0.587796 1.73486L0.198573 1.18359L0.959439 1.73486L0.722881 0.753845L1.33392 0.13208H0.556243L0.197474 -0.668579L-0.108491 0.13208H-1.02075L-0.322309 0.753845L-0.587796 1.73486ZM4.53183 1.18359L3.74546 1.73486L4.01094 0.753845L3.3125 0.13208H4.22476L4.53073 -0.668579L4.88949 0.13208H5.66717L5.05613 0.753845L5.29269 1.73486L4.53183 1.18359ZM-9.25454 6.06818L-8.46817 5.51691L-7.70731 6.06818L-7.94387 5.08716L-7.33283 4.46539H-8.1105L-8.46927 3.66473L-8.77524 4.46539H-9.6875L-8.98906 5.08716L-9.25454 6.06818ZM-4.1348 5.51691L-4.92117 6.06818L-4.65568 5.08716L-5.35413 4.46539H-4.44186L-4.1359 3.66473L-3.77713 4.46539H-2.99945L-3.61049 5.08716L-3.37393 6.06818L-4.1348 5.51691ZM-0.587796 6.06818L0.198573 5.51691L0.959439 6.06818L0.722881 5.08716L1.33392 4.46539H0.556243L0.197474 3.66473L-0.108491 4.46539H-1.02075L-0.322309 5.08716L-0.587796 6.06818ZM4.53183 5.51691L3.74546 6.06818L4.01094 5.08716L3.3125 4.46539H4.22476L4.53073 3.66473L4.88949 4.46539H5.66717L5.05613 5.08716L5.29269 6.06818L4.53183 5.51691ZM-9.25454 10.4015L-8.46817 9.85022L-7.70731 10.4015L-7.94387 9.42047L-7.33283 8.79871H-8.1105L-8.46927 7.99805L-8.77524 8.79871H-9.6875L-8.98906 9.42047L-9.25454 10.4015ZM-4.1348 9.85022L-4.92117 10.4015L-4.65568 9.42047L-5.35413 8.79871H-4.44186L-4.1359 7.99805L-3.77713 8.79871H-2.99945L-3.61049 9.42047L-3.37393 10.4015L-4.1348 9.85022ZM-0.587796 10.4015L0.198573 9.85022L0.959439 10.4015L0.722881 9.42047L1.33392 8.79871H0.556243L0.197474 7.99805L-0.108491 8.79871H-1.02075L-0.322309 9.42047L-0.587796 10.4015ZM4.53183 9.85022L3.74546 10.4015L4.01094 9.42047L3.3125 8.79871H4.22476L4.53073 7.99805L4.88949 8.79871H5.66717L5.05613 9.42047L5.29269 10.4015L4.53183 9.85022ZM8.07883 1.73486L8.8652 1.18359L9.62607 1.73486L9.38951 0.753845L10.0005 0.13208H9.22287L8.8641 -0.668579L8.55814 0.13208H7.64587L8.34432 0.753845L8.07883 1.73486ZM8.8652 5.51691L8.07883 6.06818L8.34432 5.08716L7.64587 4.46539H8.55814L8.8641 3.66473L9.22287 4.46539H10.0005L9.38951 5.08716L9.62607 6.06818L8.8652 5.51691ZM8.07883 10.4015L8.8652 9.85022L9.62607 10.4015L9.38951 9.42047L10.0005 8.79871H9.22287L8.8641 7.99805L8.55814 8.79871H7.64587L8.34432 9.42047L8.07883 10.4015ZM-6.30143 3.35022L-7.0878 3.90149L-6.82231 2.92047L-7.52075 2.29871H-6.60849L-6.30253 1.49805L-5.94376 2.29871H-5.16608L-5.77712 2.92047L-5.54056 3.90149L-6.30143 3.35022ZM-2.75454 3.90149L-1.96817 3.35022L-1.20731 3.90149L-1.44387 2.92047L-0.832828 2.29871H-1.61051L-1.96927 1.49805L-2.27524 2.29871H-3.1875L-2.48906 2.92047L-2.75454 3.90149ZM2.3652 3.35022L1.57883 3.90149L1.84432 2.92047L1.14587 2.29871H2.05814L2.3641 1.49805L2.72287 2.29871H3.50055L2.88951 2.92047L3.12607 3.90149L2.3652 3.35022ZM-7.0878 8.23486L-6.30143 7.68359L-5.54056 8.23486L-5.77712 7.25385L-5.16608 6.63208H-5.94376L-6.30253 5.83142L-6.60849 6.63208H-7.52075L-6.82231 7.25385L-7.0878 8.23486ZM-1.96817 7.68359L-2.75454 8.23486L-2.48906 7.25385L-3.1875 6.63208H-2.27524L-1.96927 5.83142L-1.61051 6.63208H-0.832828L-1.44387 7.25385L-1.20731 8.23486L-1.96817 7.68359ZM1.57883 8.23486L2.3652 7.68359L3.12607 8.23486L2.88951 7.25385L3.50055 6.63208H2.72287L2.3641 5.83142L2.05814 6.63208H1.14587L1.84432 7.25385L1.57883 8.23486ZM6.69857 3.35022L5.9122 3.90149L6.17769 2.92047L5.47925 2.29871H6.39151L6.69747 1.49805L7.05624 2.29871H7.83392L7.22288 2.92047L7.45944 3.90149L6.69857 3.35022ZM5.9122 8.23486L6.69857 7.68359L7.45944 8.23486L7.22288 7.25385L7.83392 6.63208H7.05624L6.69747 5.83142L6.39151 6.63208H5.47925L6.17769 7.25385L5.9122 8.23486Z" fill="#F7FCFF"/>
                                </svg>
                            </span>
                            <span>Morroco</span>
                        </span>
                    </option>
                </select>
               </span>
               <span className="relative w-full mr-[17.29px]">
                    <input type="text" className="relative flex items-center border-[2px] placeholder:text-[#575960] 
                                                placeholder:font-[275] placeholder:text-[16px] placeholder:leading-[41.49px] mr-[17.29px] 
                                                border-[#0062E1] rounded-full w-full outline-none pl-[35px] pr-[22.86px] pt-[16.58px] pb-[15.28px]" placeholder="05 Mai, 2021" />
                    <span className="absolute bg-[#FFFFFF] text-[#0062E1] -top-6 left-[30px] font-[600] text-[13.83px] leading-[41.49px]" >
                        when
                    </span>
               </span>
                
                <div className="rounded-full bg-[#F5D410] w-[400px] h-[52px] py-[16px] px-[12px] flex items-center justify-items-center place-content-center">
                    <span className="cursor-pointer text-[#FFFFFF] font-[600] text-[20px] leading-[41.49px]">Apply</span>
                </div>
            </div>
        </>
    )
}

export default LatestSearchLgComponent;