import React from 'react';
import { ArrowLeft, Check, Copy, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PaymentSucces() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-900 text-white relative py-3 overflow-hidden">

      <div className="px-4 py-2">
        <ArrowLeft onClick={()=>navigate(-1)} className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center py-8 relative">
        <div className="absolute">
          <div className="w-40 h-40 relative">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: '50%',
                  top: '38%',
                  transform: `rotate(${i * 30}deg) translateY(-60px) translateX(-50%)`,
                  transformOrigin: '50% 60px',
                }}
              >
                <div 
                  className={`w-2 h-2 rounded-full ${
                    i % 3 === 0 ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center relative z-10">
          <Check className="w-8 h-8 text-black" />
        </div>
      </div>

      <div className="text-center mb-4">
        <h1 className="text-xl text-white font-medium mb-2">Платеж выполнен</h1>
        <p className="text-3xl font-bold">161.85 USDT</p>
        <p className="text-gray-400 text-sm mt-2 px-2">
          Получатель может проверить баланс в аккаунте для пополнения
        </p>
      </div>
        <div className='w-full h-[1px] bg-gray-400 mb-6'>

        </div>
      <div className="px-4 space-y-4">
        <div className="flex justify-between items-start">
          <span className="text-gray-400">На</span>
          <div className="text-right">
            <p className="text-white">Никнейм: TheOneExch</p>
            <p className="text-gray-400 text-sm">878242861</p>
            <button className="text-yellow-400 text-sm mt-1">
              Добавить псевдоним
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">ID ордера</span>
          <div className="flex items-center gap-2">
            <span className="text-white">380804221549568000</span>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Способ оплаты</span>
          <span className="text-white">Спотовый аккаунт</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Оплачено</span>
          <span className="text-white">161.85 USDT</span>
        </div>
      </div>

      <div className="mx-4 mt-8 p-4 border border-white rounded-lg flex items-center gap-3">
       
        <div>
          <p className="text-white text-[15px] font-semibold">
            Получите скидку до 50% в разделе выгодных предложений
          </p>
        </div>
         <div className="flex gap-1">  
            <span className="text-yellow-400 font-bold">%</span>
        </div>
      </div>

      <div className="absolute bottom-18 left-4 right-4">
        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-medium">
          Отправить другую транзакцию
        </button>
      </div>
    </div>
  );
}

export default PaymentSucces