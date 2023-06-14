import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dcertt_list = createAsyncThunk(
  "dcertts/api_v1_dcertt_list",
  async payload => {
    const response = await apiService.api_v1_dcertt_list(payload)
    return response.data
  }
)
export const api_v1_dcertt_create = createAsyncThunk(
  "dcertts/api_v1_dcertt_create",
  async payload => {
    const response = await apiService.api_v1_dcertt_create(payload)
    return response.data
  }
)
export const api_v1_dcertt_retrieve = createAsyncThunk(
  "dcertts/api_v1_dcertt_retrieve",
  async payload => {
    const response = await apiService.api_v1_dcertt_retrieve(payload)
    return response.data
  }
)
export const api_v1_dcertt_update = createAsyncThunk(
  "dcertts/api_v1_dcertt_update",
  async payload => {
    const response = await apiService.api_v1_dcertt_update(payload)
    return response.data
  }
)
export const api_v1_dcertt_partial_update = createAsyncThunk(
  "dcertts/api_v1_dcertt_partial_update",
  async payload => {
    const response = await apiService.api_v1_dcertt_partial_update(payload)
    return response.data
  }
)
export const api_v1_dcertt_destroy = createAsyncThunk(
  "dcertts/api_v1_dcertt_destroy",
  async payload => {
    const response = await apiService.api_v1_dcertt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dcerttsSlice = createSlice({
  name: "dcertts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_dcertt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dcertt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dcertt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dcertt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dcertt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dcertt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dcertt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dcertt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_dcertt_list,
  api_v1_dcertt_create,
  api_v1_dcertt_retrieve,
  api_v1_dcertt_update,
  api_v1_dcertt_partial_update,
  api_v1_dcertt_destroy,
  slice: dcerttsSlice
}
