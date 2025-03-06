import React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PassengerDetails = () => {
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

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Passenger Details</h1>
          <p className="text-muted-foreground">
            {bookingSummary.from} to {bookingSummary.to} • {bookingSummary.date}
          </p>
        </div>
        <Button variant="outline" asChild>
          <a href="/seat-selection" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Seat Selection
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="altPhone">Alternative Phone (Optional)</Label>
                  <Input
                    id="altPhone"
                    placeholder="Enter alternative phone number"
                  />
                </div>
              </div>
            </CardContent>

            <Separator className="my-4" />

            <CardHeader>
              <CardTitle>Passenger Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {bookingSummary.selectedSeats.map((seat, index) => (
                <div key={seat} className="space-y-4 p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">
                      Passenger {index + 1} - Seat {seat}
                    </h3>
                    {index === 0 && (
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sameAsContact" />
                        <label
                          htmlFor="sameAsContact"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Same as contact person
                        </label>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`name-${seat}`}>Full Name</Label>
                      <Input
                        id={`name-${seat}`}
                        placeholder="Enter passenger's full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`idType-${seat}`}>ID Type</Label>
                      <select
                        id={`idType-${seat}`}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select ID Type</option>
                        <option value="national">National ID</option>
                        <option value="passport">Passport</option>
                        <option value="drivers">Driver's License</option>
                        <option value="voter">Voter's ID</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`idNumber-${seat}`}>ID Number</Label>
                      <Input
                        id={`idNumber-${seat}`}
                        placeholder="Enter ID number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`phone-${seat}`}>Phone Number</Label>
                      <Input
                        id={`phone-${seat}`}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-2">
                <Label htmlFor="specialRequests">
                  Special Requests (Optional)
                </Label>
                <textarea
                  id="specialRequests"
                  placeholder="Any special requirements or requests?"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="termsConditions" />
                <label
                  htmlFor="termsConditions"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>
            </CardContent>
          </Card>
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
            <CardFooter>
              <Button className="w-full" size="lg">
                Proceed to Payment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
