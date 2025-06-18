function SocialIcons(){
    return (
        <div>
            <ul className="social_icons">
                <li className="icon-content">
                    <a href="https://www.figma.com/@70765673_b5b6_4" target="_blank" rel="noopener" aria-label="Figma" data-social="figma">
                        <div className="filled"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path fill="currentColor" d="M25 2v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 18v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 34v7c0 3.855-3.145 7-7 7s-7-3.145-7-7c0-3.855 3.145-7 7-7H25zM41 9c0 3.855-3.145 7-7 7h-7V2h7C37.855 2 41 5.145 41 9zM34 18A7 7 0 1034 32 7 7 0 1034 18z"></path>
                        </svg>

                    </a>
                    <div className="tooltip">Figma</div>
                </li>
                <li className="icon-content">
                    <a href="https://github.com/Vivi9tt" aria-label="Github" data-social="github" target="_blank" rel="noopener">
                        <div className="filled"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor">
                            <path d="M25 2C12.85 2 3 11.85 3 24c0 9.7 6.27 17.9 14.95 20.8 1.1.2 1.5-.5 1.5-1.1v-3.8c-6.1 1.3-7.4-2.6-7.4-2.6-1-2.6-2.4-3.3-2.4-3.3-2-.6.2-.6.2-.6 2.2.2 3.3 2.2 3.3 2.2 2 3.3 5.2 2.4 6.5 1.8.2-1.4.8-2.4 1.4-3-4.9-.5-10.1-2.4-10.1-10.6 0-2.4.8-4.4 2.2-6-.2-.6-1-2.6.2-5.4 0 0 1.9-.6 6.2 2.2 1.8-.5 3.7-.8 5.6-.8 1.9 0 3.8.3 5.6.8 4.2-2.8 6.2-2.2 6.2-2.2 1.2 2.8.4 4.8.2 5.4 1.4 1.6 2.2 3.6 2.2 6 0 8.2-5.2 10-10.1 10.6.8.7 1.5 2 1.5 4v6c0 .6.4 1.3 1.5 1.1C40.7 41.9 47 33.7 47 24 47 11.85 37.15 2 25 2z"/>
                        </svg>

                    </a>
                    <div className="tooltip">GitHub</div>
                </li>
                <li className="icon-content">
                    <a href="https://www.linkedin.com/in/vivian-undefined-b73658292/" aria-label="Linkedin" data-social="linkedin" target="_blank" rel="noopener">
                        <div className="filled"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                </li>
            </ul>
        </div>
    );
}

export default SocialIcons;