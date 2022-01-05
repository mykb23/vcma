import { keyframes } from "@emotion/react";
import { BiPencil } from "react-icons/bi"
import { FaAmazonPay, FaCcMastercard } from "react-icons/fa"
import { SiVisa } from "react-icons/si"
import food from "../assets/images/food.png";
import walmart from "../assets/images/walmart.png";
import userAvatar from "../assets/images/useravatar.png";
import surface1 from "../assets/svg/surface1.svg";
import bank from "../assets/svg/bank.svg"
import atm from "../assets/svg/atm-machine.svg"


export const tableData = [
    { image: food, heading: '”Food & Drinks” restaurant', link: '', text1: 'Cafe and restaurants', text2: 'Card: ** 3478', sign: '-', amount: 480, currency: 'UAH' },
    { image: walmart, heading: '”Walmart” store (Main Str. 13)', link: '', text1: 'Groceries & food', text2: 'Card: ** 7813', sign: '-', amount: 80, currency: 'USD' },
    { image: userAvatar, heading: 'Transfer from', link: 'Alexey', text1: 'Cafe and restaurants', text2: 'Card: ** 3478', sign: '', amount: 6000, currency: 'USD' }
]

export const cardData = [
    { headText1: 'Total Available balance', headText2: '', icon: '', heading: '$25,958,485', buttonText1: 'Fund wallet', buttonText2: 'Withdraw wallet', b2Color: '', isCard: false },
    { headText1: '150 000', headText2: 'UAH', icon: BiPencil, heading: '2132 8732 2347 3478', buttonText1: '07/20', buttonText2: FaCcMastercard, b2Color: 'red.600', isCard: true },
    { headText1: '12 180', headText2: 'USD', icon: BiPencil, heading: '8346 5248 6232 7813', buttonText1: '10/24', buttonText2: SiVisa, b2Color: 'blue.600', isCard: true },
    { headText1: '8 305', headText2: 'EUR', icon: BiPencil, heading: '5438 2343 0474 7324', buttonText1: '14/28', buttonText2: FaAmazonPay, b2Color: 'yellow.600', isCard: true }
]

export const arr = [
    { show: 'block', icon: surface1, heading: 'Pay with card', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo' },
    { show: 'none', icon: bank, heading: 'Grow your funds', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo' },
    { show: 'none', icon: atm, heading: 'Pay anywhere, anytime', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo' },
]

export const fadeIn = keyframes`
    0% { opacity:0;}
    100% {opacity:1;}
`;