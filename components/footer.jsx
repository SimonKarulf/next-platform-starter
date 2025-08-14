export function Footer() {
    return (
        <footer className="w-full pt-16 pb-12 sm:pt-24 sm:pb-16 bg-neutral-900 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 max-w-[72rem] mx-auto">
                <div>
                    <h2 className="font-bold text-3xl">Restaurant Karulf</h2>
                    <p className="text-base mt-2">
                        Familien Karulfs samling af madklub restauranter
                    </p>
                </div>
                <div className="mt-6 sm:mt-0 text-sm text-right">
                    © 2025 Restaurant Karulf
                </div>
            </div>
        </footer>
    );
}