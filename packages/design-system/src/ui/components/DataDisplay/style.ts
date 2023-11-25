import { twc } from "../../styledTailwind";

export const InputClassName = twc.className`      
	box-border
	text-[rgba(0,0,0,0.88)]
	leading-[1.5714285714285714]
	relative inline-block w-full
	min-w-0 bg-white bg-none border
	transition-all duration-[0.2s] m-0 px-[11px] rounded-md border-solid border-[#d9d9d9]
	hover:border-@primary-600
	focus:shadow-[0_0_0_2px_rgb(5_145_255_/_10%)] focus:border-@primary-600 focus:outline-0
	focus-within:shadow-[0_0_0_2px_rgb(5_145_255_/_10%)] focus-within:border-@primary-600 focus-within:outline-0
	text-left text-sm
    `;
