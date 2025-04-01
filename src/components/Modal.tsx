import Close from "../assets/icons/close.svg"
import { ModalProps } from '@/types';

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow py-8 px-5 md:px-10 transition-all max-w-3xl ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg">
                    <Close className="h-6 w-6 text-black cursor-pointer" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;