import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ivpqumdxubyxhkwanryw.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cHF1bWR4dWJ5eGhrd2Fucnl3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjg1NDgxMiwiZXhwIjoyMDE4NDMwODEyfQ.ihSZ3GL3DiJzh48TYva8uRC_OmfiBPyVRA5Tdjfo4og',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cHF1bWR4dWJ5eGhrd2Fucnl3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjg1NDgxMiwiZXhwIjoyMDE4NDMwODEyfQ.ihSZ3GL3DiJzh48TYva8uRC_OmfiBPyVRA5Tdjfo4og',
  },
});
