import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='art'>
        <div className="menu">
            <h2><Link href='/exhibitions'>전시와 프로그램</Link></h2>
            <h4>전시</h4>
            <h4>교육프로그램</h4>
            <h4>문화행사</h4>

            <h2><Link href='/collection'>소장품과 미술연구</Link></h2>
            <h4>SeMA 소장품</h4>
            <h4>미술아카이브</h4>
            <h4>모두의 연구실 '코랄'</h4>
            <h4>SeMA 도서와 자료</h4>

            <h2><Link href='/visit'>방문하기</Link></h2>
            <h4>서울시립미술관 서소문본관</h4>
            <h4>서울시립 북서울미술관</h4>
            <h4>서울시립 남서울미술관</h4>
            <h4>서울시립 미술아카이브</h4>
            <h4>서울시립 난지미술창작스튜디오</h4>
            <h4>SeMA 벙커</h4>
            <h4>SeMA 백남준기념관</h4>
        </div>
    </div>
  )
}

export default Menu