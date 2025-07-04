-- Starter SQL schema for 75 Hard HQ

-- Diet entries
create table if not exists diet_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  entry_date date not null,
  meal jsonb,
  created_at timestamptz default now()
);

alter table diet_entries enable row level security;
create policy "Individuals can view their own diet entries"
  on diet_entries for select using (auth.uid() = user_id);
create policy "Individuals can insert their own diet entries"
  on diet_entries for insert with check (auth.uid() = user_id);

-- Workout sessions
create table if not exists workout_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  session_date date not null,
  details jsonb,
  created_at timestamptz default now()
);

alter table workout_sessions enable row level security;
create policy "Individuals can view their own sessions"
  on workout_sessions for select using (auth.uid() = user_id);
create policy "Individuals can insert their own sessions"
  on workout_sessions for insert with check (auth.uid() = user_id);

-- Menstrual cycle logs
create table if not exists cycle_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  day_date date not null,
  phase text,
  notes text,
  created_at timestamptz default now()
);

alter table cycle_logs enable row level security;
create policy "Individuals can view their own cycle logs"
  on cycle_logs for select using (auth.uid() = user_id);
create policy "Individuals can insert their own cycle logs"
  on cycle_logs for insert with check (auth.uid() = user_id);
