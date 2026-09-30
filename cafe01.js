// 네비게이션 및 페이지 switching
function switchPage(pageId) {
    // 모든 페이지 숨기기
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));

    // 모든 네비게이션 링크 활성화 해제
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));

    // 선택된 페이지 보이기
    const selectedPage = document.getElementById(`page-${pageId}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // 선택된 네비게이션 강조
    const selectedNav = document.getElementById(`nav-${pageId}`);
    if (selectedNav) {
        selectedNav.classList.add('active');
    }

    // 스크롤 상단 이동
    window.scrollTo(0, 0);
}