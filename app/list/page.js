'use client'

import Image from "next/image"
import 작명 from "/public/food0.png"
import { useState } from "react";

export default function List() {
	let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
	let [num, setNum] = useState(0);
	let [수량, 수량변경] = useState([100,0,0])
  return (
    <div className="wrap">
			<h4 className="title">상품목록</h4>
			<span>{수량[0]}</span>
			<button onClick={()=>{
				수량 = [...수량]
				수량[0]++
				수량변경(수량)
			}}>+</button>
			<span>{수량[1]}</span>
			<button onClick={()=>{
				수량 = [...수량]
				수량[1]++
				수량변경(수량)
			}}>+</button>
			<span>{수량[2]}</span>
			<button onClick={()=>{
				수량 = [...수량]
				수량[2]++
				수량변경(수량)
			}}>+</button>
				{
					상품.map((el, i)=>{
						return(
							<div className="food" key={i}>
								<Image src={작명} alt={el}></Image>
								{/* Next.js 자체 기능 Image 최적화, 이미지를 import해서 넣어야함
								1. lazy loading
								2. 사이즈 최적화
								3. layout shift 방지 */}
								{/* <Image src="https://dufftoberfest.github.io/portfolio/logo.svg" width={50} height={50}></Image> */}{/* 외부이미지 넣을땐 width, height 속성 필요함, 도메인 등록도 필요함 참고로만 */}
								<img src={`/food${i}.png`} alt={el} />
								<h4>{el} $40</h4>
								<span>{수량[i]}</span>
								<button onClick={()=>{
									수량 = [...수량];
									수량[i]++
									수량변경(수량)
								}}>+</button>
								<button onClick={()=>{
									수량 = [...수량];
									수량[i]--
									수량변경(수량)
								}}>-</button>
							</div>
						)
					})
				}
		</div>
  );
}
