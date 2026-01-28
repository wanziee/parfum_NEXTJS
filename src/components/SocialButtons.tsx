import { ShoppingBag, MessageCircle } from 'lucide-react';

interface SocialButtonsProps {
  shopeeUrl?: string;
  whatsappUrl?: string;
  shopeeText?: string;
  whatsappText?: string;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}

export default function SocialButtons({
  shopeeUrl = "https://shopee.co.id/chelseadewastoreparfume?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkUYt0uWEKZ6w1ZYq-8JucoTGSoRVZwTFtyEwpWC3n9I-oPj_vvjEHHLZ3bk_aem_ZOhs0z5Ogwtw-R-ORD3MAg",
  whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20parfum.",
  shopeeText = "Beli di Shopee",
  whatsappText = "Chat WhatsApp",
  size = 'md',
  layout = 'horizontal'
}: SocialButtonsProps) {
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const containerClasses = layout === 'horizontal' 
    ? 'flex gap-2 sm:gap-3' 
    : 'flex flex-col gap-2 sm:gap-3';

  return (
    <div className={containerClasses}>
      {/* Shopee Button */}
      <a
        href={shopeeUrl}
        target="_blank"
        rel="noopener noreferrer"
className={`
  inline-flex items-center justify-center
  ${sizeClasses[size]}
  bg-[#EE4D2D] hover:bg-[#FF7A5A]
  text-white font-semibold
  rounded-lg
  transition-all duration-200 ease-out
  hover:brightness-110
  transform hover:scale-105 active:scale-95
  shadow-md hover:shadow-lg
  border border-orange-400 hover:border-orange-300
  focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2
  tracking-tight
`}


        title="Beli produk parfum original di Shopee"
      >
        <ShoppingBag className={`${iconSizes[size]} mr-2 text-white shrink-0`} />
        <span className="text-white font-medium">{shopeeText}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
className={`
  inline-flex items-center justify-center
  ${sizeClasses[size]}
  bg-[#25D366] hover:bg-[#50d887]
  text-white font-semibold
  rounded-lg
  transition-all duration-200 ease-out
  hover:brightness-110
  transform hover:scale-105 active:scale-95
  shadow-md hover:shadow-lg
  border border-green-400 hover:border-green-300
  focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2
  tracking-tight
`}


        title="Hubungi kami via WhatsApp untuk pertanyaan dan pemesanan"
      >
        <MessageCircle className={`${iconSizes[size]} mr-2 text-white shrink-0`} />
        <span className="text-white font-medium">{whatsappText}</span>
      </a>
    </div>
  );
}
