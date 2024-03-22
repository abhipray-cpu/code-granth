import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yntoouvnwaprmgwrhzjy.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludG9vdXZud2Fwcm1nd3Joemp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNTY4MDEsImV4cCI6MjAwOTczMjgwMX0.-XjkwydC0ADLwb40l_6uw_vC-kgLtAdku8LqFhYVahc'
export const supabase = createClient(supabaseUrl, supabaseKey)
