import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchAnalytics, setFilters } from '../redux/Slices';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

const AnalyticsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userRegistrationTrend, usersByRegion, totalUsers, activeUsers, deletedUsers, filters } =
    useSelector((state: RootState) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [filters, dispatch]);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value || null;
    dispatch(setFilters({ region: selectedRegion }));
  };

  const handleDateChange = (type: 'start' | 'end', value: Date | null) => {
    dispatch(setFilters({ dateRange: { ...filters.dateRange, [type]: value ? value.toISOString() : '' } }));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="mb-6 flex flex-wrap space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Region</label>
          <select
            value={filters.region || ''}
            onChange={handleRegionChange}
            className="border rounded px-3 py-2 w-full md:w-auto"
          >
            <option value="">All Regions</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Delhi">Delhi</option>
            <option value="Gujarat">Gujarat</option>
          </select>
        </div>

        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <DatePicker
            selected={filters.dateRange.start ? new Date(filters.dateRange.start) : null}
            onChange={(date) => handleDateChange('start', date)}
            className="border rounded px-3 py-2 w-full md:w-auto"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select start date"
          />
        </div>

        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">End Date</label>
          <DatePicker
            selected={filters.dateRange.end ? new Date(filters.dateRange.end) : null}
            onChange={(date) => handleDateChange('end', date)}
            className="border rounded px-3 py-2 w-full md:w-auto"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select end date"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{totalUsers}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-2xl">{activeUsers}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Inactive Users</h3>
          <p className="text-2xl">{totalUsers - activeUsers}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Deleted Users</h3>
          <p className="text-2xl">{deletedUsers}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-4">Users by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usersByRegion}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-4">User Registration Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userRegistrationTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="registrations" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-4">Active vs Inactive Users</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Active', value: activeUsers },
                  { name: 'Inactive', value: totalUsers - activeUsers },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
              >
                {COLORS.map((color, index) => (
                  <Cell key={index} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
