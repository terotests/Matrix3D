// The code template begins here
"use strict";

(function () {

  var __amdDefs__ = {};

  // The class definition is here...
  // let the private classes out

  var Matrix3D_prototype = function Matrix3D_prototype() {
    // Then create the traits and subclasses for this class here...

    // trait comes here...

    (function (_myTrait_) {
      var _transformBatches;
      var _batchListeners;
      var _batchOn;

      // Initialize static variables here...

      /**
       * @param Function fn
       */
      _myTrait_.addChangeListener = function (fn) {

        if (!this._chListeners) this._chListeners = [];
        this._chListeners.push(fn);
      };

      /**
       * @param float t
       */
      _myTrait_.guid = function (t) {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      };

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit")) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (t) {

        this._data = {
          m00: 1,
          m01: 0,
          m02: 0,
          m03: 0,
          m10: 0,
          m11: 1,
          m12: 0,
          m13: 0,
          m20: 0,
          m21: 0,
          m22: 1,
          m23: 0,
          m30: 0,
          m31: 0,
          m32: 0,
          m33: 1
        };

        if (!_transformBatches) _transformBatches = {};
        this._id = this.guid();

        if (typeof later != "undefined") {
          later().onFrame(function () {
            for (var n in _transformBatches) {
              var m = _transformBatches[n];
              if (m._chListeners) {
                m._chListeners.forEach(function (m) {});
              }
              delete _transformBatches[n];
            }
          });
          _batchOn = true;
        } else {
          _batchOn = false;
        }
      });

      /**
       * @param float t
       */
      _myTrait_.m00 = function (t) {

        if (typeof t != "undefined") {
          if (this._data.m00 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m00 = t;
          return this;
        }
        return this._data.m00;
      };

      /**
       * @param float t
       */
      _myTrait_.m01 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m01 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m01 = t;
          return this;
        }
        return this._data.m01;
      };

      /**
       * @param float t
       */
      _myTrait_.m02 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m02 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m02 = t;
          return this;
        }
        return this._data.m02;
      };

      /**
       * @param float t
       */
      _myTrait_.m03 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m03 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m03 = t;
          return this;
        }
        return this._data.m03;
      };

      /**
       * @param float t
       */
      _myTrait_.m10 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m10 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m10 = t;
          return this;
        }
        return this._data.m10;
      };

      /**
       * @param float t
       */
      _myTrait_.m11 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m11 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m11 = t;
          return this;
        }
        return this._data.m11;
      };

      /**
       * @param float t
       */
      _myTrait_.m12 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m12 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m12 = t;
          return this;
        }
        return this._data.m12;
      };

      /**
       * @param float t
       */
      _myTrait_.m13 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m13 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m13 = t;
          return this;
        }
        return this._data.m13;
      };

      /**
       * @param float t
       */
      _myTrait_.m20 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m20 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m20 = t;
          return this;
        }
        return this._data.m20;
      };

      /**
       * @param float t
       */
      _myTrait_.m21 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m21 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m21 = t;
          return this;
        }
        return this._data.m21;
      };

      /**
       * @param float t
       */
      _myTrait_.m22 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m22 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          };
          this._data.m22 = t;
          return this;
        }
        return this._data.m22;
      };

      /**
       * @param float t
       */
      _myTrait_.m23 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m23 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m23 = t;
          return this;
        }
        return this._data.m23;
      };

      /**
       * @param float t
       */
      _myTrait_.m30 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m30 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m30 = t;
          return this;
        }
        return this._data.m30;
      };

      /**
       * @param float t
       */
      _myTrait_.m31 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m31 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m31 = t;
          return this;
        }
        return this._data.m31;
      };

      /**
       * @param float t
       */
      _myTrait_.m32 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m32 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m32 = t;
          return this;
        }
        return this._data.m32;
      };

      /**
       * @param float t
       */
      _myTrait_.m33 = function (t) {
        if (typeof t != "undefined") {
          if (this._data.m33 != t) {
            this._dirty = true;
            if (_batchOn) _transformBatches[this._id] = this;
          }
          this._data.m33 = t;
          return this;
        }
        return this._data.m33;
      };

      /**
       * @param float fn
       */
      _myTrait_.onChange = function (fn) {
        if (!this._chListeners) this._chListeners = [];
        this._chListeners.push(fn);
      };

      /**
       * Enable / Disable matrix batching
       * @param Boolean onOff  - true or false
       */
      _myTrait_.setBatching = function (onOff) {
        _batchOn = onOff;
      };
    })(this);

    (function (_myTrait_) {
      var _initDone;
      var _m3dSupport;

      // Initialize static variables here...

      /**
      * Example function of how to create full 3D transformation for object.
      The object is defined as:
      ```javascript
      var obj = {
      _scaleMatrix : Matrix3D(),
      _rotMatrix : Matrix3D(),
      _transMatrix : Matrix3D(),
      }
      ```
      Optionally can be given `_pivotPoint` to adjust the center of the rotation.
       * @param Object obj  - Object containing the 3D matrixes 
      * @param Matrix3D parentMatrix  - Matrix of the parent or null 
      * @param Function getChildItems  - Function which 
      * @param Object camera  - Camera object 
      */
      _myTrait_.applyTransformations = function (obj, parentMatrix, getChildItems, camera) {

        if (!obj._scaleMatrix && !obj._rotMatrix && !obj._transMatrix) {
          if (getChildItems) {
            var list = getChildItems(obj);
            if (list) {
              var me = this;
              list.forEach(function (i) {
                me.applyTransformations(i, parentMatrix, getChildItems, camera);
              });
            }
          }
        }

        var local = Matrix3D();

        // important to create a copy of the parent matrix first.
        if (!parentMatrix) {
          parentMatrix = Matrix3D();
        } else {
          parentMatrix = parentMatrix.createCopy();
        }

        if (!obj._lastParentMatrix) {
          obj._lastParentMatrix = parentMatrix.createCopy();
        } else {
          obj._lastParentMatrix.copyFrom(parentMatrix);
        }

        // if object has a pivot point, adjust transformation
        if (obj._pivotPoint) {
          var adjustPivot = Matrix3D();
          adjustPivot.translate({
            x: -1 * obj._pivotPoint.x,
            y: -1 * obj._pivotPoint.y,
            z: -1 * (obj._pivotPoint.z || 0)
          });
        }

        if (obj._transMatrix) {
          local.matMul(obj._transMatrix);
          var beforeRot = parentMatrix.createCopy();
          beforeRot.matMul(obj._transMatrix);
          obj._beforeRot = beforeRot;
        }

        if (obj._scaleMatrix) local.matMul(obj._scaleMatrix);
        if (obj._rotMatrix) local.matMul(obj._rotMatrix);

        if (adjustPivot) local.matMul(adjustPivot);

        // set transformation of the object

        obj._localTransform = local;

        parentMatrix.matMul(local);
        if (!obj._renderMatrix) obj._renderMatrix = new Matrix3D();

        obj._renderMatrix.copyFrom(parentMatrix);

        // if there is projection
        if (camera) {
          var project = camera._renderMatrix.createCopy().inverse(); // the final matrix of the camera
          project.matMul(obj._renderMatrix);
          obj._projectionMatrix = project;
        }

        if (getChildItems) {
          var list = getChildItems(obj);
          if (list) {
            var rm = obj._renderMatrix,
                me = this;
            list.forEach(function (i) {
              me.applyTransformations(i, rm, getChildItems, camera);
            });
          }
        }
      };

      /**
       * Copies data from other Matrix3D object
       * @param Object matrix  - Other matrix object, copy data from the object
       */
      _myTrait_.copyFrom = function (matrix) {
        var mm = matrix._data;

        this._data.m00 = mm.m00;
        this._data.m01 = mm.m01;
        this._data.m02 = mm.m02;
        this._data.m03 = mm.m03;

        this._data.m10 = mm.m10;
        this._data.m11 = mm.m11;
        this._data.m12 = mm.m12;
        this._data.m13 = mm.m13;

        this._data.m20 = mm.m20;
        this._data.m21 = mm.m21;
        this._data.m22 = mm.m22;
        this._data.m23 = mm.m23;

        this._data.m30 = mm.m30;
        this._data.m31 = mm.m31;
        this._data.m32 = mm.m32;
        this._data.m33 = mm.m33;
      };

      /**
       * Returns a copy of current Matrix3D Object
       * @param float t
       */
      _myTrait_.createCopy = function (t) {
        var newM = this.createIdentity();
        newM.updateFromParams(this.m00(), this.m01(), this.m02(), this.m03(), this.m10(), this.m11(), this.m12(), this.m13(), this.m20(), this.m21(), this.m22(), this.m23(), this.m30(), this.m31(), this.m32(), this.m33());

        return newM;
      };

      /**
       * Creates a new idendity matrix.
       * @param float t
       */
      _myTrait_.createIdentity = function (t) {
        return Matrix3D();
      };

      /**
       * Creates a Three.js matrix to be used for the library.
       * @param float t
       */
      _myTrait_.createThreeMatrix = function (t) {
        var m = new THREE.Matrix4();
        m.set(this.m00(), this.m10(), this.m20(), this.m30(), this.m01(), this.m11(), this.m21(), this.m31(), this.m02(), this.m12(), this.m22(), this.m32(), this.m03(), this.m13(), this.m23(), this.m33());
        return m;
      };

      /**
       * Creates a copy of the current translate (move) matrix.
       * @param float t
       */
      _myTrait_.createTransformCopy = function (t) {

        var newM = Matrix3D();

        newM.m30(this.m30());
        newM.m31(this.m31());
        newM.m32(this.m32());

        return newM;
      };

      /**
       * Calculates determinant of the matrix - it should be the volume of the unit space cube the matrix is spanning.
       * @param float t
       */
      _myTrait_.det = function (t) {
        var m00 = this.m00(),
            m01 = this.m01(),
            m02 = this.m02(),
            m03 = this.m03(),
            m10 = this.m10(),
            m11 = this.m11(),
            m12 = this.m12(),
            m13 = this.m13(),
            m20 = this.m20(),
            m21 = this.m21(),
            m22 = this.m22(),
            m23 = this.m23(),
            m30 = this.m30(),
            m31 = this.m31(),
            m32 = this.m32(),
            m33 = this.m33();

        var a0 = m00 * m11 - m10 * m01;
        var a1 = m00 * m21 - m20 * m01;
        var a2 = m00 * m31 - m30 * m01;
        var a3 = m10 * m21 - m20 * m11;
        var a4 = m10 * m31 - m30 * m11;
        var a5 = m20 * m31 - m30 * m21;
        var b0 = m02 * m13 - m12 * m03;
        var b1 = m02 * m23 - m22 * m03;
        var b2 = m02 * m33 - m32 * m03;
        var b3 = m12 * m23 - m22 * m13;
        var b4 = m12 * m33 - m32 * m13;
        var b5 = m22 * m33 - m32 * m23;

        return a0 * b5 - a1 * b4 + a2 * b3 + a3 * b2 - a4 * b1 + a5 * b0;
      };

      /**
       * Returns transformation matrix, matrix3d if CSS3D is supported, otherwise it will return matrix(...)
       * @param float t
       */
      _myTrait_.getCSSMatrix3D = function (t) {

        _m3dSupport = this.systemHas3D();
        var nn = 5;

        if (_m3dSupport) {
          var tStr = "matrix3d(" + this.m00().toFixed(nn) + ", " + this.m01().toFixed(nn) + ", " + this.m02().toFixed(nn) + ", " + this.m03().toFixed(nn) + "," + this.m10().toFixed(nn) + ", " + this.m11().toFixed(nn) + ", " + this.m12().toFixed(nn) + ", " + this.m13().toFixed(nn) + "," + this.m20().toFixed(nn) + ", " + this.m21().toFixed(nn) + ", " + this.m22().toFixed(nn) + ", " + this.m23().toFixed(nn) + "," + this.m30().toFixed(nn) + ", " + this.m31().toFixed(nn) + ", " + this.m32().toFixed(nn) + ", " + this.m33().toFixed(nn) + ")";

          return "transform:" + tStr + ";-webkit-transform:" + tStr + ";-ms-transform:" + tStr + ";-webkit-transform-origin:0 0;-ms-transform-origin:0 0;";
        } else {
          var tStr = "matrix(" + this.m00().toFixed(nn) + ", " + this.m01().toFixed(nn) + ", " + this.m10().toFixed(nn) + ", " + this.m11().toFixed(nn) + ", " + this.m30().toFixed(nn) + ", " + this.m31().toFixed(nn) + ")";

          return "transform:" + tStr + ";-webkit-transform:" + tStr + ";-ms-transform:" + tStr + ";-webkit-transform-origin:0 0;-ms-transform-origin:0 0;";
        }
      };

      /**
       * Returns the current 2D rotation angle in radians. Calculated from the direction of the x -axis of the matrix.
       * @param float t
       */
      _myTrait_.getRotation2D = function (t) {

        var i = this.m00(),
            j = this.m01(),
            r;

        if (j >= 0) {
          r = Math.acos(i);
        } else {
          r = -1 * Math.acos(i);
        }
        return r;
      };

      /**
       * Returns 2x2 matrix to be used with SVG transformations.
       * @param float t
       */
      _myTrait_.getSVGTransform = function (t) {

        return "matrix(" + this.m00().toFixed(5) + "," + this.m01().toFixed(5) + "," + this.m10().toFixed(5) + "," + this.m11().toFixed(5) + "," + this.m30().toFixed(5) + "," + this.m31().toFixed(5) + ")";
      };

      /**
       * Calculate intersection point of plane defined by z-axis of this Matrix and &quot;origo&quot; which is defined by the transformation matrix translate, Vector or ray for the intersection stesti is defined by `startPoint` and `endPoint`. If the vector is parallel to the plane undefined is returned.
       * @param Object startPoint  - Vector (x,y,z)
       * @param Object endPoint  - Vector (x,y,z)
       * @param Object origo  - Not required - Vector (x,y,z)
       */
      _myTrait_.intersectPlane = function (startPoint, endPoint, origo) {

        var np = this.normalizeVector3D({
          x: this.m20(),
          y: this.m21(),
          z: this.m22()
        });

        if (origo) {
          var startToPlane = {
            x: origo.x - startPoint.x,
            y: origo.y - startPoint.y,
            z: origo.z - startPoint.z
          };
        } else {
          var startToPlane = {
            x: this.m30() - startPoint.x,
            y: this.m31() - startPoint.y,
            z: this.m32() - startPoint.z
          };
        }

        // distance from the starting point to the plane
        var totalDist = startToPlane.x * np.x + startToPlane.y * np.y + startToPlane.z * np.z;

        var v = {
          x: endPoint.x - startPoint.x,
          y: endPoint.y - startPoint.y,
          z: endPoint.z - startPoint.z
        };

        var partialDist = v.x * np.x + v.y * np.y + v.z * np.z;

        if (Math.abs(totalDist) > 0 && Math.abs(partialDist) > 0) {

          var t = totalDist / partialDist;

          if (Math.abs(t) > 0) {

            var isect = {
              x: startPoint.x + v.x * t,
              y: startPoint.y + v.y * t,
              z: startPoint.z + v.z * t
            };

            return isect;
          }
        }
      };

      /**
       * Will transform the matrix into it&#39;s inverse representation. This will effectively inverse the whole transformation. Create a copy of the Matrix first if you want to preserve the original matrix.
       * @param float t
       */
      _myTrait_.inverse = function (t) {

        var m00 = this.m00(),
            m01 = this.m01(),
            m02 = this.m02(),
            m03 = this.m03(),
            m10 = this.m10(),
            m11 = this.m11(),
            m12 = this.m12(),
            m13 = this.m13(),
            m20 = this.m20(),
            m21 = this.m21(),
            m22 = this.m22(),
            m23 = this.m23(),
            m30 = this.m30(),
            m31 = this.m31(),
            m32 = this.m32(),
            m33 = this.m33();

        var a0 = m00 * m11 - m10 * m01;
        var a1 = m00 * m21 - m20 * m01;
        var a2 = m00 * m31 - m30 * m01;
        var a3 = m10 * m21 - m20 * m11;
        var a4 = m10 * m31 - m30 * m11;
        var a5 = m20 * m31 - m30 * m21;
        var b0 = m02 * m13 - m12 * m03;
        var b1 = m02 * m23 - m22 * m03;
        var b2 = m02 * m33 - m32 * m03;
        var b3 = m12 * m23 - m22 * m13;
        var b4 = m12 * m33 - m32 * m13;
        var b5 = m22 * m33 - m32 * m23;

        var divider = a0 * b5 - a1 * b4 + a2 * b3 + a3 * b2 - a4 * b1 + a5 * b0;

        if (divider == 0) return;

        var invDet = 1 / divider;

        this.m00((m11 * b5 - m21 * b4 + m31 * b3) * invDet);
        this.m01((-m01 * b5 + m21 * b2 - m31 * b1) * invDet);
        this.m02((m01 * b4 - m11 * b2 + m31 * b0) * invDet);
        this.m03((-m01 * b3 + m11 * b1 - m21 * b0) * invDet);

        this.m10((-m10 * b5 + m20 * b4 - m30 * b3) * invDet);
        this.m11((m00 * b5 - m20 * b2 + m30 * b1) * invDet);
        this.m12((-m00 * b4 + m10 * b2 - m30 * b0) * invDet);
        this.m13((m00 * b3 - m10 * b1 + m20 * b0) * invDet);

        this.m20((m13 * a5 - m23 * a4 + m33 * a3) * invDet);
        this.m21((-m03 * a5 + m23 * a2 - m33 * a1) * invDet);
        this.m22((m03 * a4 - m13 * a2 + m33 * a0) * invDet);
        this.m23((-m03 * a3 + m13 * a1 - m23 * a0) * invDet);

        this.m30((-m12 * a5 + m22 * a4 - m32 * a3) * invDet);
        this.m31((m02 * a5 - m22 * a2 + m32 * a1) * invDet);
        this.m32((-m02 * a4 + m12 * a2 - m32 * a0) * invDet);
        this.m33((m02 * a3 - m12 * a1 + m22 * a0) * invDet);

        return this;
      };

      /**
       * @param float
       */
      _myTrait_.isValidMatrix = function () {
        var mm = this._data;

        if (isNaN(mm.m00)) return false;
        if (isNaN(mm.m01)) return false;
        if (isNaN(mm.m02)) return false;
        if (isNaN(mm.m03)) return false;

        if (isNaN(mm.m10)) return false;
        if (isNaN(mm.m11)) return false;
        if (isNaN(mm.m12)) return false;
        if (isNaN(mm.m13)) return false;

        if (isNaN(mm.m20)) return false;
        if (isNaN(mm.m21)) return false;
        if (isNaN(mm.m22)) return false;
        if (isNaN(mm.m23)) return false;

        if (isNaN(mm.m30)) return false;
        if (isNaN(mm.m31)) return false;
        if (isNaN(mm.m32)) return false;
        if (isNaN(mm.m33)) return false;

        return true;
      };

      /**
       * @param float t
       */
      _myTrait_.log = function (t) {
        console.log(this._data);
      };

      /**
       * Multiplies this matrix with other matrix. The result is saved into this matrix. Use createCopy to create new matrixes.
       * @param float other
       */
      _myTrait_.matMul = function (other) {
        var m00 = this.m00(),
            m01 = this.m01(),
            m02 = this.m02(),
            m03 = this.m03(),
            m10 = this.m10(),
            m11 = this.m11(),
            m12 = this.m12(),
            m13 = this.m13(),
            m20 = this.m20(),
            m21 = this.m21(),
            m22 = this.m22(),
            m23 = this.m23(),
            m30 = this.m30(),
            m31 = this.m31(),
            m32 = this.m32(),
            m33 = this.m33();

        var t00 = other.m00(),
            t01 = other.m01(),
            t02 = other.m02(),
            t03 = other.m03(),
            t10 = other.m10(),
            t11 = other.m11(),
            t12 = other.m12(),
            t13 = other.m13(),
            t20 = other.m20(),
            t21 = other.m21(),
            t22 = other.m22(),
            t23 = other.m23(),
            t30 = other.m30(),
            t31 = other.m31(),
            t32 = other.m32(),
            t33 = other.m33();

        this.updateFromParams(m00 * t00 + m10 * t01 + m20 * t02 + m30 * t03, m01 * t00 + m11 * t01 + m21 * t02 + m31 * t03, m02 * t00 + m12 * t01 + m22 * t02 + m32 * t03, m03 * t00 + m13 * t01 + m23 * t02 + m33 * t03, m00 * t10 + m10 * t11 + m20 * t12 + m30 * t13, m01 * t10 + m11 * t11 + m21 * t12 + m31 * t13, m02 * t10 + m12 * t11 + m22 * t12 + m32 * t13, m03 * t10 + m13 * t11 + m23 * t12 + m33 * t13, m00 * t20 + m10 * t21 + m20 * t22 + m30 * t23, m01 * t20 + m11 * t21 + m21 * t22 + m31 * t23, m02 * t20 + m12 * t21 + m22 * t22 + m32 * t23, m03 * t20 + m13 * t21 + m23 * t22 + m33 * t23, m00 * t30 + m10 * t31 + m20 * t32 + m30 * t33, m01 * t30 + m11 * t31 + m21 * t32 + m31 * t33, m02 * t30 + m12 * t31 + m22 * t32 + m32 * t33, m03 * t30 + m13 * t31 + m23 * t32 + m33 * t33);

        return this;
      };

      /**
       * Will set the transformation back to normal values. TODO: should actually normalize the vectors of the Matrix, so is not really correct function.
       * @param float t
       */
      _myTrait_.normalize = function (t) {

        this.copyFrom(new Matrix3D());
      };

      /**
       * Normalizes given Vector (x,y,z) into unit -vector
       * @param Object v
       */
      _myTrait_.normalizeVector3D = function (v) {

        var len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);

        if (len == 0 || isNaN(len)) return {
          x: 1,
          y: 0,
          z: 0
        };

        return {
          x: v.x / len,
          y: v.y / len,
          z: v.z / len
        };
      };

      /**
       * Projects a vector `v`  (x,y,z,w)  - usually w = 1 - into 3D space using this matrix. Will return new vector with (x,y,z,w)
       * @param float v
       */
      _myTrait_.projectVector = function (v) {
        var m00 = this.m00(),
            m01 = this.m01(),
            m02 = this.m02(),
            m03 = this.m03(),
            m10 = this.m10(),
            m11 = this.m11(),
            m12 = this.m12(),
            m13 = this.m13(),
            m20 = this.m20(),
            m21 = this.m21(),
            m22 = this.m22(),
            m23 = this.m23(),
            m30 = this.m30(),
            m31 = this.m31(),
            m32 = this.m32(),
            m33 = this.m33();

        return {
          x: m00 * v.x + m10 * v.y + m20 * v.z + m30 * v.w,
          y: m01 * v.x + m11 * v.y + m21 * v.z + m31 * v.w,
          z: m02 * v.x + m12 * v.y + m22 * v.z + m32 * v.w,
          w: m03 * v.x + m13 * v.y + m23 * v.z + m33 * v.w
        };
      };

      /**
       * Rotate the Matrix around axis (x,y,z)
       * @param Object axis  - Vector (x,y,z) to rotate around
       * @param float radAngle  - Radians to rotate
       */
      _myTrait_.rotate = function (axis, radAngle) {

        var axis = this.normalizeVector3D(axis);
        var ax = axis.x,
            ay = axis.y,
            az = axis.z;

        var cosA = Math.cos(radAngle);
        var sinA = Math.sin(radAngle);

        this.updateFromParams(cosA + ax * ax * (1 - cosA), ay * ax * (1 - cosA) + az * sinA, az * ax * (1 - cosA) - ay * sinA, 0, ay * ax * (1 - cosA) - az * sinA, cosA + ay * ay * (1 - cosA), az * ay * (1 - cosA) + ax * sinA, 0, az * ax * (1 - cosA) + ay * sinA, ay * az * (1 - cosA) - ax * sinA, cosA + az * az * (1 - cosA), 0, 0, 0, 0, 1);
        return this;
      };

      /**
       * Creates a new scaling matrix to be used in 3D transformation.
       * @param float s  - The scaling amount.
       */
      _myTrait_.scale = function (s) {

        this.updateFromParams(s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1);

        return this;
      };

      /**
       * Projects a view space vector into camera space. Camera has center (cx,cy) coordinates, which should be positioned into center of the screen. The projection distance &quot;d&quot; is the distance of the imaginary eye from the projection plane. If &quot;d&quot; is not given, x and y coordinates are used as they are.
       * @param Vector3D worldVector  - Transformed vector (x,y,z) into the view system coordinate space
       * @param Object camera  - Camera
       */
      _myTrait_.screenProjection = function (worldVector, camera) {

        var vector = this.projectVector(worldVector);

        // if perspective projection
        if (camera.d) {
          var dist = camera.d - vector.z,
              x = vector.x - (camera.cx || 500),
              y = vector.y - (camera.cy || 500);
          if (dist > 0) {
            // console.log("Scale factor ", camera.d / dist);
            return {
              x: camera.cx + x * camera.d / dist,
              y: camera.cy + y * camera.d / dist
            };
          }
        } else {
          x = vector.x; // - (camera.cx || 500),
          y = vector.y; // - (camera.cy || 500);   
          return {
            x: x,
            y: y
          };
        }
      };

      /**
       * The Canvas context to correspond to the transformation defined by the Matrix.
       * @param Object ctx  - HTML Canvas context
       */
      _myTrait_.setCanvasContext = function (ctx) {
        ctx.setTransform(this.m00(), this.m01(), this.m10(), this.m11(), this.m30(), this.m31());
      };

      /**
       * @param float ctx
       */
      _myTrait_.setDomContext = function (ctx) {
        this.setCanvasContext(ctx);
      };

      /**
       * Tests if the running system has CSS3D support enabled.
       * @param float t
       */
      _myTrait_.systemHas3D = function (t) {

        if (typeof _m3dSupport != "undefined") return _m3dSupport;

        if (typeof window == "undefined") return false;

        if (!window.getComputedStyle) {
          return false;
        }

        var el = document.createElement("p"),
            has3d,
            transforms = {
          "webkitTransform": "-webkit-transform",
          "OTransform": "-o-transform",
          "msTransform": "-ms-transform",
          "MozTransform": "-moz-transform",
          "transform": "transform"
        };

        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);

        for (var t in transforms) {
          if (el.style[t] !== undefined) {
            el.style[t] = "translate3d(1px,1px,1px)";
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
          }
        }

        document.body.removeChild(el);

        return has3d !== undefined && has3d.length > 0 && has3d !== "none";
      };

      /**
       * Creates a matrix with translate (move) according to given vector (x,y,z)
       * @param Object v  - Vector (x,y,z) to translate with
       */
      _myTrait_.translate = function (v) {
        this.updateFromParams(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v.x, v.y, v.z, 1);
        return this;
      };

      /**
       * Updates the matrix values from a function arguments, 16 argumens can be given.
       * @param float t
       */
      _myTrait_.updateFromParams = function (t) {

        var d = this._data;
        var i = 0;

        d.m00 = arguments[i++];
        d.m01 = arguments[i++];
        d.m02 = arguments[i++];
        d.m03 = arguments[i++];

        d.m10 = arguments[i++];
        d.m11 = arguments[i++];
        d.m12 = arguments[i++];
        d.m13 = arguments[i++];

        d.m20 = arguments[i++];
        d.m21 = arguments[i++];
        d.m22 = arguments[i++];
        d.m23 = arguments[i++];

        d.m30 = arguments[i++];
        d.m31 = arguments[i++];
        d.m32 = arguments[i++];
        d.m33 = arguments[i++];
      };
    })(this);
  };

  var Matrix3D = function Matrix3D(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof Matrix3D) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == "function") {
          if (res._classInfo.name != Matrix3D._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == "function") m.init.apply(m, args);
      }
    } else return new Matrix3D(a, b, c, d, e, f, g, h);
  };
  // inheritance is here

  Matrix3D._classInfo = {
    name: "Matrix3D"
  };
  Matrix3D.prototype = new Matrix3D_prototype();

  (function () {
    if (typeof define !== "undefined" && define !== null && define.amd != null) {
      __amdDefs__["Matrix3D"] = Matrix3D;
      this.Matrix3D = Matrix3D;
    } else if (typeof module !== "undefined" && module !== null && module.exports != null) {
      module.exports["Matrix3D"] = Matrix3D;
    } else {
      this.Matrix3D = Matrix3D;
    }
  }).call(new Function("return this")());

  if (typeof define !== "undefined" && define !== null && define.amd != null) {
    define(__amdDefs__);
  }
}).call(new Function("return this")());