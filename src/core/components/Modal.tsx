export default function Modal({
  onClose = () => {},
  children = "Modal",
  header = "",
  instruction = "",
  boxStyle = "",
  bodyStyle = "",
}: {
  onClose?: any;
  children?: any;
  boxStyle?: string;
  bodyStyle?: string;
  header?: string;
  instruction?: string;
}) {
  return (
    <div
      className={`no-scrollbar overlay fixed left-0 top-0 z-40 h-screen w-screen overflow-auto bg-black bg-opacity-[.6] ${boxStyle}`}
      style={{
        minHeight: "calc(100vh - 72px)",
        zIndex: 800,
      }}
    >
      <div className="flex h-full w-full items-center justify-center gap-1">
        <div
          className={`mx-auto h-[95%] w-[90%] overflow-y-scroll bg-white !p-5 sm:w-2/3 md:w-[65%] lg:w-1/3 ${bodyStyle}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="text-brand text-[18px] font-[600]">{header}</p>

              <p className="text-[14px]">{instruction}</p>
            </div>

            <button type="button" onClick={onClose}>
              <span className="solar--close-square-broken iconify h-[40px] w-[40px]"></span>
            </button>
          </div>

          <div className="mt-[10px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
