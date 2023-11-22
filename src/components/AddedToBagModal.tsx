import { EbookConfigType } from '@/configs/ebooksConfig';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import PrimaryButton from './PrimaryButton';
import { Divider } from '@nextui-org/react';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { useRouter } from 'next/navigation';

interface AddedToBagModalProps {
  ebookData: EbookConfigType;
  isOpen: boolean;
  onOpenChange: () => void;
}

const AddedToBagModal: FC<AddedToBagModalProps> = ({
  ebookData,
  isOpen,
  onOpenChange,
}) => {
  const { title, price, discountPrice, picture } = ebookData;
  const { shoppingBag, bagWorthValue } = useShoppingBag();
  const router = useRouter();
  return (
    <Modal
      placement="center"
      size={'sm'}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase">
              Produkt dodany do koszyka
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  width={150}
                  height={150}
                  alt={`${title} image`}
                  src={picture}
                />
                <p>
                  Cena:{' '}
                  <span>
                    {discountPrice ? `${discountPrice} zł` : ` ${price} zł`}
                  </span>
                </p>
                <Divider />
                <p>Ilość produktów w koszyku: {shoppingBag?.length}</p>
                <p>Wartość koszyka: {bagWorthValue} zł</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="flex flex-col gap-2 items-center w-full">
                <PrimaryButton
                  text={'Przejdź do koszyka'}
                  onClick={() => {
                    onClose();
                    router.push('/koszyk', { scroll: false });
                  }}
                  additionalStyle="uppercase"
                />
                <div
                  onClick={onClose}
                  className="cursor-pointer text-xs group text-black flex font-light z-20 tracking-wide uppercase mt-2"
                >
                  Kontynuuj zakupy
                  <ChevronRight
                    size={14}
                    strokeWidth={2}
                    className="group-hover:translate-x-2 transition-all"
                  />
                </div>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddedToBagModal;
