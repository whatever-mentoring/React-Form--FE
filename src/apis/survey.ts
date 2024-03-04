import { supabase } from '../supabaseClient'
import { FormRequestType, FormResponseType } from '../types/form';

export async function getSurvey(uuid: string): Promise<FormResponseType> {
  const { data, error } = await supabase
  .from('survey')
  .select()  
  .eq('uuid', uuid)

  if (error) throw new Error(error.message)
  return data[0]
}

export async function getSurveyCount() {
  const { error, count } = await supabase
    .from('survey')
    .select('*', { count: 'exact' });

  if (error) throw new Error(error.message);
  return count || 0;
}

export async function postSurvey(survey: FormRequestType) {
  const surveyCount = await getSurveyCount();

  const { data, error } = await supabase
    .from('survey')
    .insert({ id: surveyCount + 1, ...survey })
      
  if (error) throw new Error(error.message)
  return true;
}
 