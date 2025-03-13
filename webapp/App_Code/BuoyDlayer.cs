using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

using System.Web.Services;
/// <summary>
/// Summary description for BuoyDlayer
/// </summary>
public class BuoyDlayer
{
    public BuoyDlayer()
    {
       
    }
    public DataTable GetHDData(string table,string year)
    {
        string ssqlconnectionstring = ConfigurationManager.ConnectionStrings["connMsp"].ConnectionString;
        SqlConnection sqlconn = new SqlConnection(ssqlconnectionstring);
        sqlconn.Open();
        DataSet ds = new DataSet();
        DataTable dt = new DataTable();
        string query = "";
        try
        {
            query = "select * from "+ table+ " where convert(varchar,[Time],21) like '%" + year+"%' order by [Time]";
            SqlCommand cmd = new SqlCommand(query, sqlconn);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            adp.Fill(ds);
            dt = ds.Tables[0];
            cmd.ExecuteNonQuery();
        }
        catch (Exception ex)
        {

        }
        finally
        {
            sqlconn.Close();
        }
        return dt;
    }

    public DataTable GetWaveData(string table, string fromYear, string toYear)
    {
        string ssqlconnectionstring = ConfigurationManager.ConnectionStrings["connMsp"].ConnectionString;
        SqlConnection sqlconn = new SqlConnection(ssqlconnectionstring);
        sqlconn.Open();
        DataSet ds = new DataSet();
        DataTable dt = new DataTable();
        string query = "";
        try
        {
            query = "select * from " + table + " where [time] like '" + fromYear + "%' order by [Time]";
            SqlCommand cmd = new SqlCommand(query, sqlconn);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            adp.Fill(ds);
            dt = ds.Tables[0];
            cmd.ExecuteNonQuery();
        }
        catch (Exception ex)
        {

        }
        finally
        {
            sqlconn.Close();
        }
        return dt;
    }

    public DataTable GetAllData(string table)
    {
        string ssqlconnectionstring = ConfigurationManager.ConnectionStrings["connMsp"].ConnectionString;
        SqlConnection sqlconn = new SqlConnection(ssqlconnectionstring);
        sqlconn.Open();
        DataSet ds = new DataSet();
        DataTable dt = new DataTable();
        string query = "";
        try
        {
            query = "select * from " + table + " order by year";
            SqlCommand cmd = new SqlCommand(query, sqlconn);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            adp.Fill(ds);
            dt = ds.Tables[0];
            cmd.ExecuteNonQuery();
        }
        catch (Exception ex)
        {

        }
        finally
        {
            sqlconn.Close();
        }
        return dt;
    }

    public DataTable GetPuduWeather(string table)
    {
        string ssqlconnectionstring = ConfigurationManager.ConnectionStrings["connMsp"].ConnectionString;
        SqlConnection sqlconn = new SqlConnection(ssqlconnectionstring);
        sqlconn.Open();
        DataSet ds = new DataSet();
        DataTable dt = new DataTable();
        string query = "";
        try
        {
            query = "select * from " + table + " order by year";
            SqlCommand cmd = new SqlCommand(query, sqlconn);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            adp.Fill(ds);
            dt = ds.Tables[0];
            cmd.ExecuteNonQuery();
        }
        catch (Exception ex)
        {

        }
        finally
        {
            sqlconn.Close();
        }
        return dt;
    }

   
}