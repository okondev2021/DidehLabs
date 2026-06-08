const Logo = () => {
    return (
        <div className="flex items-center gap-2 font-head tracking-tight select-none">
            {/* The Sentinel Mark: A crisp lowercase wordmark with an active status indicator */}
            <span className="text-[1.4rem] font-bold text-text-custom tracking-tight">
                Dideh<span className="text-accent-custom font-normal">Labs</span>
            </span>
            {/* The Active Monitoring Dot */}
            <span className="sentinel-dot animate-pulse mt-1" />
        </div>
    );
}

export default Logo;