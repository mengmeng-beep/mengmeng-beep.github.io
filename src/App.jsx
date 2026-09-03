import { useEffect, useState } from 'react';
import systemArchitecture from '../images/Architecture_system.png';
import aiArchitecture from '../images/architecture_ai.png';
import profileImage from '../images/me.jpg';
import uroLogo from '../images/logo_uro.png';
import resumeUrl from '../resume.pdf';
import '../style.css';

const skillGroups = [
  { title: 'Languages', items: [['Java', '상'], ['JavaScript', '중'], ['Python', '중']] },
  { title: 'Backend / Framework', items: [['Spring', '상'], ['Spring Data JPA', '중'], ['FastAPI', '중']] },
  { title: 'Frontend', items: [['React', '중'], ['jQuery', '중']] },
  { title: 'Database', items: [['Oracle', '중'], ['Vector DB', '중']] },
  { title: 'Domain & AI', items: [['LLM / RAG', '중'], ['PLC 연동', '중'], ['아모레퍼시픽 WMS', '상']] },
];

const projects = [
  {
    number: '01', title: '싸부 RAG 챗봇 / 데이터 분석 학습', summary: '문서를 데이터로 바꾸고, 검색과 LLM을 연결한 질의응답 시스템',
    problem: '많은 학습 문서에서 원하는 내용을 직접 찾아야 했고, 데이터를 분석해 의미 있는 답변으로 연결하는 과정도 필요했습니다.',
    role: '데이터분석 마스터클래스에서 문서 임베딩, 벡터DB 저장, 검색, LLM 응답까지 RAG 파이프라인을 구현했습니다. 백엔드 API와 분석 흐름도 함께 설계하며 기술을 실제 서비스 형태로 익혔습니다.',
    stack: ['Python', 'FastAPI', 'Embedding', 'Vector DB', 'LLM', 'RAG', 'REST API'],
    result: '자연어 질문을 관련 문서 검색과 연결하고, 검색 근거를 바탕으로 답변하는 QA 흐름을 완성했습니다. 프로젝트 링크와 정량적 결과는 추후 업데이트할 예정입니다.',
    image: aiArchitecture,
  },
];

const experience = [
  { period: '2016.11 — 2025.12', company: '㈜유로', logo: uroLogo, role: '온라인 커머스 총괄 디렉터', result: '해외 소싱, 국내 유통·판매, 내부 시스템 관리까지 커머스 전 과정을 주도했습니다. 구체적인 성과 수치는 추후 보강 예정입니다.' },
  { period: '2014.02 — 2016.11', company: '㈜진코퍼레이션', logo: '/images/logo_zin.png', role: '아모레퍼시픽 창고 자동화 시스템 WMS 개발', result: '아모레퍼시픽 창고 자동화 시스템의 WMS 구축과 고도화를 담당했습니다. 입고·보관·피킹·출고까지 이어지는 물류 데이터 흐름을 설계하고 PLC와 연동해 현장 작업이 시스템에서 자연스럽게 이어지도록 구현했습니다.' },
];

function Header() {
  return <header className="site-header">
    <a className="logo" href="#top">KIM JIWOON</a>
    <nav aria-label="주요 메뉴">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>;
}

function Hero() {
  return (
    <section className="hero section-wrap">
      <div className="hero-copy-block">
        <p className="eyebrow">BACKEND DEVELOPER · AMOREPACIFIC WMS · LLM</p>
        <h2>
          업무의 흐름을 이해하고
          <br />
          <span>단단한 시스템을 만듭니다.</span>
        </h2>
        <p className="hero-copy">
          현장의 문제를 데이터와 API로 구조화하고, 오래 쓰이는 백엔드 시스템으로
          구현합니다.
        </p>
        <div className="actions">
          <a className="button primary" href={resumeUrl}>
            이력서 PDF 다운로드
          </a>
          <a className="button secondary" href="#projects">
            프로젝트 보기
          </a>
        </div>
      </div>
      <div className="hero-profile">
        <div className="portrait-frame">
          <img src={profileImage} alt="백엔드 개발자 김지운" />
        </div>
        <div>
          <strong>김지운</strong>
          <p>Backend Developer</p>
          <p>jommeng2@naver.com</p>
          <p>010-0000-0000</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return <section id="about" className="section-wrap two-column">
    <div><p className="eyebrow">01 / ABOUT</p><h2>현장의 흐름을<br />이해하는 개발자</h2></div>
    <div className="body-copy"><p>처음 개발을 시작한 곳은 아모레퍼시픽 물류창고 자동화 시스템을 구축하던 물류 현장이었습니다. WMS를 개발하며 입고부터 출고까지 창고의 작업이 어떤 데이터로 연결되는지, 시스템의 작은 변경이 현장에 어떤 차이를 만드는지 배웠습니다.</p><p>물류센터의 재고와 작업 흐름을 안정적으로 관리하기 위해 Spring, Oracle, JSP, JPA를 중심으로 웹 백엔드 기술을 익혔습니다. 기능을 만드는 데서 끝나지 않고, 현장 작업자의 흐름이 끊기지 않으며 데이터가 정확하게 쌓이는지를 중요하게 봅니다.</p><p>최근에는 데이터분석 마스터클래스를 수료하며 ‘싸부’ 프로젝트에서 문서 임베딩부터 벡터 검색, LLM 응답까지 RAG 기반 QA 시스템을 구축했습니다. 협업할 때는 맡은 일을 끝까지 책임지고, 앞으로는 물류와 서비스 데이터에서 문제를 발견해 개선 방향을 제시하는 개발자로 성장하고 싶습니다.</p></div>
  </section>;
}

function Projects() {
  return <section id="projects" className="section-wrap projects-section"><div className="section-heading"><div><p className="eyebrow">05 / PROJECTS</p><h2>문제에서 결과까지</h2></div><p>업무의 맥락을 파악하고, 필요한 기술을 골라 실제 흐름으로 연결한 기록입니다.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-label">CASE STUDY</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="project-detail"><div><b>Problem</b><p>{project.problem}</p></div><div><b>My Role</b><p>{project.role}</p></div><div><b>Result</b><p>{project.result}</p></div></div><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="project-link-note">링크 및 성과 수치 업데이트 예정</p></article>)}</div><ArchitectureGallery /></section>;
}

function ArchitectureCard({ number, title, description, image, alt, onOpen }) {
  return <figure className="architecture-card"><figcaption><span>{number}</span><strong>{title}</strong><small>{description}</small></figcaption><button className="architecture-preview" type="button" onClick={() => onOpen({ image, alt, title })} aria-label={`${title} 크게 보기`}><img src={image} alt={alt} /></button></figure>;
}

function ArchitectureGallery() {
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

  return <div className="architecture-gallery"><div className="architecture-gallery-heading"><p className="eyebrow">ARCHITECTURE</p><p>이미지를 클릭하면 전체 구조를 크게 볼 수 있습니다.</p></div><div className="architecture-grid"><ArchitectureCard number="01" title="Backend Architecture" description="프로젝트 백엔드를 담당하며 다룬 기술들입니다." image={systemArchitecture} alt="아모레퍼시픽 창고 자동화 시스템 아키텍처" onOpen={setSelectedArchitecture} /><ArchitectureCard number="02" title="AI / RAG Architecture" description="싸부 RAG 챗봇의 검색 및 응답 흐름" image={aiArchitecture} alt="싸부 RAG 챗봇 AI 아키텍처" onOpen={setSelectedArchitecture} /></div>{selectedArchitecture && <div className="image-modal" role="dialog" aria-modal="true" aria-label={`${selectedArchitecture.title} 크게 보기`} onClick={() => setSelectedArchitecture(null)}><div className="image-modal-content" onClick={(event) => event.stopPropagation()}><button className="image-modal-close" type="button" onClick={() => setSelectedArchitecture(null)} aria-label="이미지 닫기">×</button><img src={selectedArchitecture.image} alt={selectedArchitecture.alt} /></div></div>}</div>;
}

function Skills() {
  return <section id="skills" className="section-wrap skills-section"><p className="eyebrow">03 / SKILLS</p><h2>익숙한 도구로<br />정확하게 만듭니다.</h2><div className="skill-grid">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-badges">{group.items.map(([name, level]) => <span key={name}>{name}<small>{level}</small></span>)}</div></div>)}</div></section>;
}

function Experience() {
  return <section id="experience" className="section-wrap experience-section"><p className="eyebrow">04 / EXPERIENCE</p><h2>현장과 서비스 사이에서<br />쌓아온 경험</h2><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-logo"><img src={item.logo} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; }} /></div><div className="timeline-meta"><span>{item.period}</span><strong>{item.company}</strong></div><div><h3>{item.role}</h3><p>{item.result}</p></div></article>)}</div></section>;
}

function Education() {
  return <section className="section-wrap education-section"><div><p className="eyebrow">06 / EDUCATION & CERTIFICATES</p><h2>배움을 계속<br />업데이트합니다.</h2></div><div className="education-list"><article><span>2004.03 — 2013.08</span><h3>한성대학교 정보시스템공학과</h3><p>4년제 · 졸업작품: 캡스톤 디자인 방탈출 형식의 퍼즐게임</p></article><article><span>CERTIFICATE</span><h3>워드프로세서 1급</h3></article><article><span>COURSE</span><h3>동아일보 데이터분석 마스터클래스</h3><p>수료</p></article></div></section>;
}

function Contact() {
  return <section id="contact" className="contact section-wrap"><p className="eyebrow">07 / CONTACT</p><h2>함께 좋은 시스템을<br />만들고 싶습니다.</h2><p className="contact-copy">문제를 함께 정의하고, 오래 유지되는 해결책을 고민하는 대화를 기다립니다.</p><div className="contact-info">jommeng2@naver.com<br />010-0000-0000</div><div className="contact-links"><a href="https://github.com/mengmeng-beep" target="_blank" rel="noreferrer">GitHub ↗</a><a href={resumeUrl}>이력서 PDF 다운로드 ↗</a></div></section>;
}

export default function App() {
  return <><Header /><main id="top"><Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact /></main><footer><p>© 2026 Kim Jiwoon. Built with React & Vite.</p></footer></>;
}
