import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Payment = () => {
  // Mock data for booking summary
  const bookingSummary = {
    operator: "VIP Transport",
    busType: "Executive Coach",
    from: "Accra",
    to: "Kumasi",
    date: "Friday, June 14, 2024",
    departureTime: "06:00 AM",
    selectedSeats: ["5A", "5B"],
    seatPrice: 120,
    totalPrice: 240,
  };

  const [paymentMethod, setPaymentMethod] = useState("mtn");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentComplete(true);
    }, 3000);
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Payment</h1>
          <p className="text-muted-foreground">
            {bookingSummary.from} to {bookingSummary.to} • {bookingSummary.date}
          </p>
        </div>
        {!isPaymentComplete && (
          <Button variant="outline" asChild>
            <a href="/passenger-details" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Passenger Details
            </a>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {!isPaymentComplete ? (
            <Card>
              <CardHeader>
                <CardTitle>Select Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs
                  defaultValue="mtn"
                  className="w-full"
                  onValueChange={setPaymentMethod}
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="mtn">MTN Mobile Money</TabsTrigger>
                    <TabsTrigger value="vodafone">Vodafone Cash</TabsTrigger>
                    <TabsTrigger value="airtel">AirtelTigo Money</TabsTrigger>
                  </TabsList>

                  <TabsContent value="mtn" className="space-y-4 mt-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold">MTN</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">MTN Mobile Money</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with your MTN Mobile Money account
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mtn-number">
                        MTN Mobile Money Number
                      </Label>
                      <Input
                        id="mtn-number"
                        placeholder="Enter your MTN number (e.g., 024XXXXXXX)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">How to pay:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        <li>Enter your MTN Mobile Money number above</li>
                        <li>Click on "Pay Now" button</li>
                        <li>You will receive a prompt on your phone</li>
                        <li>Enter your Mobile Money PIN to confirm payment</li>
                        <li>Wait for payment confirmation</li>
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="vodafone" className="space-y-4 mt-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">Vodafone</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Vodafone Cash</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with your Vodafone Cash account
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vodafone-number">
                        Vodafone Cash Number
                      </Label>
                      <Input
                        id="vodafone-number"
                        placeholder="Enter your Vodafone number (e.g., 050XXXXXXX)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">How to pay:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        <li>Enter your Vodafone Cash number above</li>
                        <li>Click on "Pay Now" button</li>
                        <li>Dial *110# on your phone</li>
                        <li>
                          Select "Make Payment" and enter the token you receive
                        </li>
                        <li>Enter your Vodafone Cash PIN to confirm payment</li>
                        <li>Wait for payment confirmation</li>
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="airtel" className="space-y-4 mt-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-500 w-16 h-16 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">AirtelTigo</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">AirtelTigo Money</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay with your AirtelTigo Money account
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="airtel-number">
                        AirtelTigo Money Number
                      </Label>
                      <Input
                        id="airtel-number"
                        placeholder="Enter your AirtelTigo number (e.g., 026XXXXXXX)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">How to pay:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        <li>Enter your AirtelTigo Money number above</li>
                        <li>Click on "Pay Now" button</li>
                        <li>You will receive a prompt on your phone</li>
                        <li>
                          Enter your AirtelTigo Money PIN to confirm payment
                        </li>
                        <li>Wait for payment confirmation</li>
                      </ol>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePayment}
                  disabled={!phoneNumber || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      Pay Now <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                <p className="text-muted-foreground mb-6">
                  Your payment has been processed successfully.
                </p>

                <div className="w-full max-w-md p-6 border rounded-lg mb-6">
                  <h3 className="font-semibold mb-4">Ticket Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Booking Reference:
                      </span>
                      <span className="font-medium">TG-24061-5AB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Journey:</span>
                      <span className="font-medium">
                        {bookingSummary.from} to {bookingSummary.to}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Date & Time:
                      </span>
                      <span className="font-medium">
                        {bookingSummary.date}, {bookingSummary.departureTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seats:</span>
                      <span className="font-medium">
                        {bookingSummary.selectedSeats.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline">Download Ticket</Button>
                  <Button>View My Bookings</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bus Operator</span>
                <span className="font-medium">{bookingSummary.operator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Journey</span>
                <span className="font-medium">
                  {bookingSummary.from} to {bookingSummary.to}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time</span>
                <span className="font-medium">
                  {bookingSummary.date}, {bookingSummary.departureTime}
                </span>
              </div>
              <Separator />
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Selected Seats</span>
                  <span className="font-medium">
                    {bookingSummary.selectedSeats.join(", ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Seat Price</span>
                  <span className="font-medium">
                    GH₵ {bookingSummary.seatPrice.toFixed(2)} ×{" "}
                    {bookingSummary.selectedSeats.length}
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>GH₵ {bookingSummary.totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {!isPaymentComplete && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All payment information is encrypted and securely processed.
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-sm">Secured by TripGh Pay</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
