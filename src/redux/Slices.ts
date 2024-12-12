import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mockData from '../utils/analyticsData.json';

export interface AnalyticsState {
  userRegistrationTrend: { month: string; registrations: number; date: string; region: string }[];
  usersByRegion: { region: string; count: number }[];
  totalUsers: number;
  activeUsers: number;
  deletedUsers: number;
  filters: {
    dateRange: { start: string; end: string };
    region: string | null;
  };
}

const initialState: AnalyticsState = {
  userRegistrationTrend: [],
  usersByRegion: [],
  totalUsers: 0,
  activeUsers: 0,
  deletedUsers: 0,
  filters: {
    dateRange: {
      start: new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString(),
      end: new Date().toISOString()
    },
    region: null
  }
};

export const fetchAnalytics = createAsyncThunk('analytics/fetch', async (_, { getState }) => {
  const state = getState() as { analytics: AnalyticsState };
  const { dateRange, region } = state.analytics.filters;

  const filteredData = {
    ...mockData,
    userRegistrationTrend: mockData.userRegistrationTrend.filter(item => {
      const itemDate = new Date(item.date);
      const isWithinDateRange =
        itemDate >= new Date(dateRange.start) && itemDate <= new Date(dateRange.end);
      const isInRegion = !region || item.region.toLowerCase() === region.toLowerCase();
      return isWithinDateRange && isInRegion;
    }),
    usersByRegion: region
      ? mockData.usersByRegion.filter(r => r.region.toLowerCase() === region.toLowerCase())
      : mockData.usersByRegion
  };

  return filteredData;
});

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAnalytics.fulfilled, (state, action) => {
      state.userRegistrationTrend = action.payload.userRegistrationTrend;
      state.usersByRegion = action.payload.usersByRegion;
      state.totalUsers = action.payload.totalUsers;
      state.activeUsers = action.payload.activeUsers;
      state.deletedUsers = action.payload.deletedUsers;
    });
  }
});

export const { setFilters } = analyticsSlice.actions;
export default analyticsSlice.reducer;
