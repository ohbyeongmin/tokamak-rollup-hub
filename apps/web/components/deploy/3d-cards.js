export function horizonCards() {
  return (
    <div className="horizon-cards__container--fade-right relative h-[95%] w-full">
      <div className="horizon-card__card-1--appear absolute left-1/2 top-1/2 h-[50%] w-[35%] -translate-x-[110%] -translate-y-1/2 perspective-origin-right perspective-400">
        <div className="h-full w-full transform bg-gradient-to-r from-tokamak-blue to-tokamak-blue/0 opacity-50 blur-md rotate-y-45"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[40%] -translate-x-[50%] -translate-y-1/2 transition-transform perspective-origin-right perspective-400">
        <div className="h-full w-full transform bg-gradient-to-tr from-tokamak-blue to-tokamak-blue/0 blur-[2px] rotate-x-3 rotate-y-45"></div>
      </div>
      <div className="horizon-card__card-3--appear absolute left-1/2 top-1/2 h-[60%] w-[45%] -translate-y-1/2 perspective-origin-right perspective-400">
        <div className="h-full w-full transform bg-gradient-to-tr from-tokamak-blue to-tokamak-blue/0 opacity-95 blur-sm rotate-x-2 rotate-y-45"></div>
      </div>
    </div>
  );
}

export function verticalCards() {
  return (
    <div className="relative h-[95%] w-full vertical-cards__container--fade-top">
      <div className="h-[50%] w-[50%] perspective-400 absolute left-[20%] bottom-[15%] perspective-origin-top">
        <div className="h-full w-full blur-sm transform bg-gradient-to-br from-tokamak-blue to-tokamak-blue/0 rotate-x-[80deg] -rotate-z-[40deg]"></div>
      </div>
      <div className="vertical-cards__card--appear h-[45%] w-[45%] perspective-400 absolute left-1/3 bottom-[35%] perspective-origin-top">
        <div className="h-full w-full blur-[2px] transform bg-gradient-to-r from-tokamak-blue opacity-80 to-tokamak-blue/0 rotate-x-[80deg] -rotate-z-[40deg]"></div>
      </div>
      <div className="vertical-cards__card--appear h-[30%] w-[30%] perspective-400 absolute left-1/2 bottom-[55%] perspective-origin-top-left">
        <div className="h-full w-full blur-md transform bg-gradient-to-r from-tokamak-blue to-tokamak-blue/0 opacity-60 rotate-x-[80deg] -rotate-z-[35deg]"></div>
      </div>
    </div>
  );
}
