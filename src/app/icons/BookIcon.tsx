type IconProps = {
    isSelect: boolean
}

const BookIcon = ({ isSelect }: IconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={isSelect ? 'stroke-black' : 'stroke-white'} d="M6.99169 22H19.0046C19.494 22 19.8726 21.6214 19.8726 21.132C19.8726 20.7165 19.5863 20.4118 19.2355 20.2456C18.0997 19.7378 17.8781 18.1681 19.0323 17.0693C19.5032 16.6537 19.8633 16.1921 19.8633 15.2595V5.03786C19.8633 3.0434 18.8384 2 16.8532 2H7.01016C5.03416 2 4 3.03416 4 5.03786V18.9898C4 20.9658 5.03416 22 6.99169 22ZM16.687 3.83749C17.5826 3.83749 18.0259 4.3084 18.0259 5.15789V14.9732C18.0259 15.4257 17.7673 15.675 17.3056 15.675H8.23823V3.83749H16.687ZM5.83749 15.9982V5.15789C5.83749 4.39151 6.1976 3.93906 6.92705 3.85596V15.6842C6.51154 15.7211 6.15143 15.8319 5.83749 15.9982ZM7.241 20.2641C6.253 20.2641 5.73592 19.7008 5.73592 18.8329C5.73592 17.9926 6.32687 17.4109 7.30563 17.4109H16.5208C16.6223 17.4109 16.7239 17.4017 16.8163 17.3832C16.3546 18.362 16.41 19.4238 16.9086 20.2641H7.241Z" fill="white" />
        </svg>

    )
}

export default BookIcon