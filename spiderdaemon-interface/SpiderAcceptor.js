//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./spider_types');
//HELPER FUNCTIONS AND STRUCTURES

SpiderAcceptor_buildTask_args = function(args) {
  this.taskType = null;
  this.subTaskType = null;
  this.url = null;
  if (args) {
    if (args.taskType !== undefined) {
      this.taskType = args.taskType;
    }
    if (args.subTaskType !== undefined) {
      this.subTaskType = args.subTaskType;
    }
    if (args.url !== undefined) {
      this.url = args.url;
    }
  }
};
SpiderAcceptor_buildTask_args.prototype = {};
SpiderAcceptor_buildTask_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.taskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.subTaskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.url = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_buildTask_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_buildTask_args');
  if (this.taskType !== null && this.taskType !== undefined) {
    output.writeFieldBegin('taskType', Thrift.Type.I32, 1);
    output.writeI32(this.taskType);
    output.writeFieldEnd();
  }
  if (this.subTaskType !== null && this.subTaskType !== undefined) {
    output.writeFieldBegin('subTaskType', Thrift.Type.I32, 2);
    output.writeI32(this.subTaskType);
    output.writeFieldEnd();
  }
  if (this.url !== null && this.url !== undefined) {
    output.writeFieldBegin('url', Thrift.Type.STRING, 3);
    output.writeString(this.url);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_buildTask_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_buildTask_result.prototype = {};
SpiderAcceptor_buildTask_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_buildTask_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_buildTask_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_deleteTask_args = function(args) {
  this.taskType = null;
  if (args) {
    if (args.taskType !== undefined) {
      this.taskType = args.taskType;
    }
  }
};
SpiderAcceptor_deleteTask_args.prototype = {};
SpiderAcceptor_deleteTask_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.taskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_deleteTask_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_deleteTask_args');
  if (this.taskType !== null && this.taskType !== undefined) {
    output.writeFieldBegin('taskType', Thrift.Type.I32, 1);
    output.writeI32(this.taskType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_deleteTask_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_deleteTask_result.prototype = {};
SpiderAcceptor_deleteTask_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_deleteTask_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_deleteTask_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_banTask_args = function(args) {
  this.taskType = null;
  if (args) {
    if (args.taskType !== undefined) {
      this.taskType = args.taskType;
    }
  }
};
SpiderAcceptor_banTask_args.prototype = {};
SpiderAcceptor_banTask_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.taskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_banTask_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_banTask_args');
  if (this.taskType !== null && this.taskType !== undefined) {
    output.writeFieldBegin('taskType', Thrift.Type.I32, 1);
    output.writeI32(this.taskType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_banTask_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_banTask_result.prototype = {};
SpiderAcceptor_banTask_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_banTask_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_banTask_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_deleteBanTask_args = function(args) {
  this.taskType = null;
  if (args) {
    if (args.taskType !== undefined) {
      this.taskType = args.taskType;
    }
  }
};
SpiderAcceptor_deleteBanTask_args.prototype = {};
SpiderAcceptor_deleteBanTask_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.taskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_deleteBanTask_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_deleteBanTask_args');
  if (this.taskType !== null && this.taskType !== undefined) {
    output.writeFieldBegin('taskType', Thrift.Type.I32, 1);
    output.writeI32(this.taskType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_deleteBanTask_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_deleteBanTask_result.prototype = {};
SpiderAcceptor_deleteBanTask_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_deleteBanTask_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_deleteBanTask_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_statusTask_args = function(args) {
  this.taskType = null;
  if (args) {
    if (args.taskType !== undefined) {
      this.taskType = args.taskType;
    }
  }
};
SpiderAcceptor_statusTask_args.prototype = {};
SpiderAcceptor_statusTask_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.taskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_statusTask_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_statusTask_args');
  if (this.taskType !== null && this.taskType !== undefined) {
    output.writeFieldBegin('taskType', Thrift.Type.I32, 1);
    output.writeI32(this.taskType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_statusTask_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_statusTask_result.prototype = {};
SpiderAcceptor_statusTask_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_statusTask_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_statusTask_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_runTaskList_args = function(args) {
};
SpiderAcceptor_runTaskList_args.prototype = {};
SpiderAcceptor_runTaskList_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_runTaskList_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_runTaskList_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_runTaskList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_runTaskList_result.prototype = {};
SpiderAcceptor_runTaskList_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_runTaskList_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_runTaskList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_banTaskList_args = function(args) {
};
SpiderAcceptor_banTaskList_args.prototype = {};
SpiderAcceptor_banTaskList_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_banTaskList_args.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_banTaskList_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptor_banTaskList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
SpiderAcceptor_banTaskList_result.prototype = {};
SpiderAcceptor_banTaskList_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SpiderAcceptor_banTaskList_result.prototype.write = function(output) {
  output.writeStructBegin('SpiderAcceptor_banTaskList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SpiderAcceptorClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
SpiderAcceptorClient.prototype = {};
SpiderAcceptorClient.prototype.buildTask = function(taskType, subTaskType, url, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_buildTask(taskType, subTaskType, url);
};

SpiderAcceptorClient.prototype.send_buildTask = function(taskType, subTaskType, url) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('buildTask', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_buildTask_args();
  args.taskType = taskType;
  args.subTaskType = subTaskType;
  args.url = url;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_buildTask = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_buildTask_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('buildTask failed: unknown result');
};
SpiderAcceptorClient.prototype.deleteTask = function(taskType, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_deleteTask(taskType);
};

SpiderAcceptorClient.prototype.send_deleteTask = function(taskType) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteTask', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_deleteTask_args();
  args.taskType = taskType;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_deleteTask = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_deleteTask_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteTask failed: unknown result');
};
SpiderAcceptorClient.prototype.banTask = function(taskType, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_banTask(taskType);
};

SpiderAcceptorClient.prototype.send_banTask = function(taskType) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('banTask', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_banTask_args();
  args.taskType = taskType;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_banTask = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_banTask_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('banTask failed: unknown result');
};
SpiderAcceptorClient.prototype.deleteBanTask = function(taskType, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_deleteBanTask(taskType);
};

SpiderAcceptorClient.prototype.send_deleteBanTask = function(taskType) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteBanTask', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_deleteBanTask_args();
  args.taskType = taskType;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_deleteBanTask = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_deleteBanTask_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteBanTask failed: unknown result');
};
SpiderAcceptorClient.prototype.statusTask = function(taskType, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_statusTask(taskType);
};

SpiderAcceptorClient.prototype.send_statusTask = function(taskType) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('statusTask', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_statusTask_args();
  args.taskType = taskType;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_statusTask = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_statusTask_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('statusTask failed: unknown result');
};
SpiderAcceptorClient.prototype.runTaskList = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_runTaskList();
};

SpiderAcceptorClient.prototype.send_runTaskList = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('runTaskList', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_runTaskList_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_runTaskList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_runTaskList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('runTaskList failed: unknown result');
};
SpiderAcceptorClient.prototype.banTaskList = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_banTaskList();
};

SpiderAcceptorClient.prototype.send_banTaskList = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('banTaskList', Thrift.MessageType.CALL, this.seqid);
  var args = new SpiderAcceptor_banTaskList_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SpiderAcceptorClient.prototype.recv_banTaskList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SpiderAcceptor_banTaskList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('banTaskList failed: unknown result');
};
SpiderAcceptorProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
SpiderAcceptorProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

SpiderAcceptorProcessor.prototype.process_buildTask = function(seqid, input, output) {
  var args = new SpiderAcceptor_buildTask_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.buildTask(args.taskType, args.subTaskType, args.url, function (err, result) {
    var result = new SpiderAcceptor_buildTask_result((err != null ? err : {success: result}));
    output.writeMessageBegin("buildTask", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

SpiderAcceptorProcessor.prototype.process_deleteTask = function(seqid, input, output) {
  var args = new SpiderAcceptor_deleteTask_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.deleteTask(args.taskType, function (err, result) {
    var result = new SpiderAcceptor_deleteTask_result((err != null ? err : {success: result}));
    output.writeMessageBegin("deleteTask", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

SpiderAcceptorProcessor.prototype.process_banTask = function(seqid, input, output) {
  var args = new SpiderAcceptor_banTask_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.banTask(args.taskType, function (err, result) {
    var result = new SpiderAcceptor_banTask_result((err != null ? err : {success: result}));
    output.writeMessageBegin("banTask", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

SpiderAcceptorProcessor.prototype.process_deleteBanTask = function(seqid, input, output) {
  var args = new SpiderAcceptor_deleteBanTask_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.deleteBanTask(args.taskType, function (err, result) {
    var result = new SpiderAcceptor_deleteBanTask_result((err != null ? err : {success: result}));
    output.writeMessageBegin("deleteBanTask", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

SpiderAcceptorProcessor.prototype.process_statusTask = function(seqid, input, output) {
  var args = new SpiderAcceptor_statusTask_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.statusTask(args.taskType, function (err, result) {
    var result = new SpiderAcceptor_statusTask_result((err != null ? err : {success: result}));
    output.writeMessageBegin("statusTask", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

SpiderAcceptorProcessor.prototype.process_runTaskList = function(seqid, input, output) {
  var args = new SpiderAcceptor_runTaskList_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.runTaskList(function (err, result) {
    var result = new SpiderAcceptor_runTaskList_result((err != null ? err : {success: result}));
    output.writeMessageBegin("runTaskList", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

SpiderAcceptorProcessor.prototype.process_banTaskList = function(seqid, input, output) {
  var args = new SpiderAcceptor_banTaskList_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.banTaskList(function (err, result) {
    var result = new SpiderAcceptor_banTaskList_result((err != null ? err : {success: result}));
    output.writeMessageBegin("banTaskList", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}
