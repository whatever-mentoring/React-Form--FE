import { supabase } from '../clients/supabaseClient'
import { FormRequestType, FormResponseType } from '../types/form';

export async function getSurvey(uuid?: string): Promise<FormResponseType> {
  const { data } = await supabase
    .from('survey')
    .select()  
    .eq('uuid', uuid)
  
  return data?.[0]
}

export async function getSurveyCount() {
  const { count } = await supabase
    .from('survey')
    .select('*', { count: 'exact' });

  return count || 0;
}

export async function createSurvey(survey: FormRequestType) {
  const surveyCount = await getSurveyCount();

  const { data } = await supabase
    .from('survey')
    .insert({ id: surveyCount + 1, ...survey })
    
  return data;
}
 