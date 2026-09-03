import { useEffect, useState } from 'react';
import systemArchitecture from '../images/Architecture_system.png';
import aiArchitecture from '../images/architecture_ai.png';
import resumeUrl from '../resume.pdf';
import '../style.css';

const skills = [
  ['Backend', <>Java · Spring Boot · Spring MVC<br />JPA · Querydsl · REST API</>],
  ['Data & Search', <>MySQL · Elasticsearch<br />MinIO · Apache Parquet</>],
  ['Security & AI', <>Spring Security · JWT · OAuth2<br />LLM API · Prompt Design · RAG</>],
  ['Tools', <>Gradle · Docker · Swagger/OpenAPI<br />Git · GitHub</>],
];

const tags = ['Java 21', 'Spring Boot', 'JPA', 'MySQL', 'Elasticsearch', 'LLM'];
const projectPoints = [
  '가격·거래동향 및 지역·단지 검색 API 개발',
  '자연어 질문 의도 분류와 구조화된 검색 조건 생성',
  'JWT·OAuth2 인증 및 권한 처리',
  '서비스·검색·보안 영역 테스트 작성',
];

function Header() {
  return <header className="site-header">
    <a className="logo" href="#top">JIUN</a>
    <nav>
      <a href="#about">소개</a><a href="#projects">프로젝트</a><a href="#skills">기술</a><a href="#contact">연락처</a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero section-wrap">
    <p className="eyebrow">BACKEND DEVELOPER · WMS · LLM</p>
    <h1>업무의 흐름을 이해하고<br /><span>서비스로 구현합니다.</span></h1>
    <p className="hero-copy">- WMS 개발 경험을 바탕으로 창고시스템의 이해<br />- 백엔드 프로젝트를 통해 데이터 흐름과 API 설계 경험<br />- LLM을 활용한 자연어 처리 및 검색 기능 개발</p>
    <div className="actions"><a className="button primary" href="#projects">프로젝트 보기</a><a className="button secondary" href="https://github.com/mengmeng-beep" target="_blank" rel="noreferrer">GitHub 방문</a></div>
  </section>;
}

function About() {
  return <section id="about" className="section-wrap two-column">
    <div><p className="eyebrow">ABOUT ME</p><h2>문제를 구조화하고<br />끝까지 개선합니다.</h2></div>
    <div className="body-copy"><p>백엔드 개발에서는 업무를 도메인 모델과 API로 구조화하는 데 관심이 있으며</p><p>자연어 질문을 검색 조건으로 변환하고 결과를 답변으로 제공하는 LLM 기능을 개발하며 백엔드와 AI를 연결하는 경험을 했습니다.</p><p>WMS 개발 경험을 통해 물류 현장의 업무 흐름과 창고시스템의 구조를 이해하고, 사용자의 작업을 뒷받침하는 시스템을 고민해 왔습니다.</p></div>
  </section>;
}

function Projects() {
  return <section id="projects" className="section-wrap"><p className="eyebrow">FEATURED PROJECT</p><div className="project-card"><div className="project-number">01</div><div><h2>서울 부동산 가격정보 서비스</h2><p className="project-summary">아파트 가격과 거래동향 데이터를 조회하고, 자연어 질문을 분석해 검색 결과 기반 답변을 제공하는 웹 서비스</p><div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ul>{projectPoints.map((point) => <li key={point}>{point}</li>)}</ul><a className="text-link" href="https://github.com/mengmeng-beep/seoul-market-price-back" target="_blank" rel="noreferrer">프로젝트 저장소 보기 ↗</a></div></div></section>;
}

function ArchitectureCard({ number, title, description, image, alt, onOpen }) {
  return <figure className="architecture-card"><figcaption><span>{number}</span><strong>{title}</strong><small>{description}</small></figcaption><button className="architecture-preview" type="button" onClick={() => onOpen({ image, alt, title })} aria-label={`${title} 크게 보기`}><img src={image} alt={alt} /></button></figure>;
}

function Skills() {
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);

  useEffect(() => {
    if (!selectedArchitecture) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setSelectedArchitecture(null);
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedArchitecture]);

  return <section id="skills" className="section-wrap skills-section"><p className="eyebrow">TECH STACK</p><h2>기술 스택</h2><div className="skill-grid">{skills.map(([title, content]) => <div key={title}><h3>{title}</h3><p>{content}</p></div>)}</div><div className="architecture-grid"><ArchitectureCard number="01" title="System Architecture" description="서비스 전체 구조와 데이터 흐름" image={systemArchitecture} alt="서울 부동산 가격정보 서비스 시스템 아키텍처" onOpen={setSelectedArchitecture} /><ArchitectureCard number="02" title="AI Architecture" description="자연어 질문 처리와 검색 응답 흐름" image={aiArchitecture} alt="자연어 질문 처리 및 검색 응답 AI 아키텍처" onOpen={setSelectedArchitecture} /></div>{selectedArchitecture && <div className="image-modal" role="dialog" aria-modal="true" aria-label={`${selectedArchitecture.title} 크게 보기`} onClick={() => setSelectedArchitecture(null)}><div className="image-modal-content" onClick={(event) => event.stopPropagation()}><button className="image-modal-close" type="button" onClick={() => setSelectedArchitecture(null)} aria-label="이미지 닫기">×</button><img src={selectedArchitecture.image} alt={selectedArchitecture.alt} /></div></div>}</section>;
}

function Contact() {
  return <section id="contact" className="contact section-wrap"><p className="eyebrow">CONTACT</p><h2>함께 문제를 해결하고<br />성장하고 싶습니다.</h2><a className="email" href="mailto:jommeng2@gmail.com">jommeng2@gmail.com</a><div className="contact-links"><a href="https://github.com/mengmeng-beep" target="_blank" rel="noreferrer">GitHub ↗</a><a href={resumeUrl}>이력서 PDF ↗</a></div></section>;
}

export default function App() {
  return <><Header /><main id="top"><Hero /><About /><Projects /><Skills /><Contact /></main><footer><p>© 2026 Kim Jiwoon. Built with React & Vite.</p></footer></>;
}
