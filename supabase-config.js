// ═══════════════════════════════════════════════════════
//  SUPABASE-CONFIG.JS — Supabase client initialisation
// ═══════════════════════════════════════════════════════

const SUPABASE_URL = 'https://emylkdskicemxklsmazj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_TmOmSjsHepCgJBKqIJmUJw_VDmAGiOZ';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
