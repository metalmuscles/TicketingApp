import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Edit, Trash2, MapPin, Clock, ArrowRight } from 'lucide-react';

const RouteManagement = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      origin: 'Accra',
      destination: 'Kumasi',
      distance: '248 km',
      duration: '4h 30m',
      basePrice: 120,
      stops: ['Nkawkaw', 'Konongo'],
      status: 'active',
    },
    {
      id: 2,
      origin: 'Accra',
      destination: 'Tamale',
      distance: '618 km',
      duration: '10h 15m',
      basePrice: 220,
      stops: ['Kumasi', 'Kintampo', 'Techiman'],
      status: 'active',
    },
    {
      id: 3,
      origin: 'Accra',
      destination: 'Cape Coast',
      distance: '144 km',
      duration: '2h 45m',
      basePrice: 80,
      stops: ['Winneba', 'Mankessim'],
      status: 'active',
    },
    {
      id: 4,
      origin: 'Kumasi',
      destination: 'Tamale',
      distance: '390 km',
      duration: '6h 30m',
      basePrice: 150,
      stops: ['Techiman', 'Kintampo'],
      status: 'active',
    },
    {
      id: 5,
      origin: 'Accra',
      destination: 'Takoradi',
      distance: '218 km',
      duration: '3h 45m',
      basePrice: 100,
      stops: ['Winneba', 'Mankessim'],
      status: 'inactive',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showInactive, setShowInactive] = useState(false);

  const filteredRoutes = routes.filter(route => {
    const matchesSearch = 
      route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = showInactive ? true : route.status === 'active';
    
    return matchesSearch && matchesStatus;
  });

  const [isAddRouteOpen, setIsAddRouteOpen] = useState(false);
  const [newRoute, setNewRoute] = useState({
    origin: '',
    destination: '',
    distance: '',
    duration: '',
    basePrice: '',
    stops: '',
  });

  const handleAddRoute = () => {
    const routeToAdd = {
      id: routes.length + 1,
      origin: newRoute.origin,
      destination: newRoute.destination,
      distance: newRoute.distance,
      duration: newRoute.duration,
      basePrice: parseFloat(newRoute.basePrice),
      stops: newRoute.stops.split(',').map(stop => stop.trim()),
      status: 'active',
    };

    setRoutes([...routes, routeToAdd]);
    setNewRoute({
      origin: '',
      destination: '',
      distance: '',
      duration: '',
      basePrice: '',
      stops: '',
    });
    setIsAddRouteOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Route Management</h1>
          <p className="text-muted-foreground">Add, edit, and manage bus routes</p>
        </div>
        <Dialog open={isAddRouteOpen} onOpenChange={setIsAddRouteOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add New Route
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Route</DialogTitle>
              <DialogDescription>
                Enter the details for the new bus route.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin</Label>
                  <Input 
                    id="origin" 
                    placeholder="e.g., Accra" 
                    value={newRoute.origin}
                    onChange={(e) => setNewRoute({...newRoute, origin: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input 
                    id="destination" 
                    placeholder="e.g., Kumasi" 
                    value={newRoute.destination}
                    onChange={(e) => setNewRoute({...newRoute, destination: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="distance">Distance</Label>
                  <Input 
                    id="distance" 
                    placeholder="e.g., 248 km" 
                    value={newRoute.distance}
                    onChange={(e) => setNewRoute({...newRoute, distance: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input 
                    id="duration" 
                    placeholder="e.g., 4h 30m" 
                    value={newRoute.duration}
                    onChange={(e) => setNewRoute({...newRoute, duration: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="basePrice">Base Price (GH₵)</Label>
                <Input 
                  id="basePrice" 
                  type="number" 
                  placeholder="e.g., 120" 
                  value={newRoute.basePrice}
                  onChange={(e) => setNewRoute({...newRoute, basePrice: e.target.value})}
                />
              </div>
              <div className="space-