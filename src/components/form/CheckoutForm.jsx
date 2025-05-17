import { useState } from "react";
import InputField from "./InputField";

export default function CheckoutForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");


  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Checkout
        </h2>   

        <form>
          {/* Payment Information */}
          <h3 className="text-xl font-medium mb-4 text-gray-700">Payment Information</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <InputField 
              label="Name on Card" 
              name="cardName" 
              placeholder="John Doe" 
              type="text"
            />
            <InputField 
              label="Card Number" 
              name="cardNumber" 
              type="text" 
              placeholder="1234 5678 9012 3456" 
              maxLength={19} 
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="flex gap-4">
              <InputField 
                label="Expiry MM/YY" 
                type="text" 
                name="expiry" 
                placeholder="MM/YY" 
                maxLength={5}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <InputField 
                label="CVC" 
                type="text" 
                name="cvc" 
                placeholder="123" 
                maxLength={4}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
